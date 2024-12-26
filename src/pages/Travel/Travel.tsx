import './Travel.css';
import "../../Components/style.css";
import Header from "../../Components/Header/Header";
import React, { useRef, useEffect } from 'react';
import Globe from 'globe.gl';
import { scaleSequentialSqrt } from 'd3-scale';
import { interpolateYlOrRd } from 'd3-scale-chromatic';
import * as THREE from 'three';
import MARKERS from './markers.json'

const clouds = "/clouds.png";
const CLOUDS_ALT = 0.004;
const CLOUDS_ROTATION_SPEED = 0.01;

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

  const CITY_COORDINATES = {
    'Toronto, Canada': { lat: 43.65107, lng: -79.347015 },
    'New York, USA': { lat: 40.7128, lng: -74.0060 },
    'Tokyo, Japan': { lat: 35.6762, lng: 139.6503 },
    'Baltimore, USA': { lat: 39.2904, lng: -76.6122 },
    'Osaka, Japan': { lat: 34.6937, lng: 135.5023 },
    'Kyoto, Japan': { lat: 35.0116, lng: 135.7681 },
    'Orlando, USA': { lat: 28.5383, lng: -81.3792 },
    'Cancún, Mexico': { lat: 21.1619, lng: -86.8515 },
    'San José, Costa Rica': { lat: 9.9281, lng: -84.0907 },
    'Shenyang, China': { lat: 41.8057, lng: 123.4328 },
    'Zhangjiajie, China': { lat: 29.1171, lng: 110.4792 },
    'Barcelona, Spain': { lat: 41.3851, lng: 2.1734 },
    'Marseille, France': { lat: 43.2965, lng: 5.3698 },
    'Houston, USA': { lat: 29.7604, lng: -95.3698 }
};

const generateArcsData = (markers) => {
  return markers
      .filter(marker => marker.went)
      .map(marker => {
        const homeCoords = CITY_COORDINATES[marker.home];
        if (!homeCoords || marker.home === marker.label) return null;
        return {
              startLat: marker.lat,
              startLng: marker.lng,
              endLat: homeCoords.lat,
              endLng: homeCoords.lng,
              color: "yellow", 
          };
      }).filter(arc => arc !== null);
};
  
export default function TravelPage() {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<THREE.Mesh | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (globeContainerRef.current) {
      const colorScale = scaleSequentialSqrt(interpolateYlOrRd);
      const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
      const arcsData = generateArcsData(MARKERS);

      const world = new Globe(globeContainerRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .polygonSideColor(() => 'rgba(0,0,0,0)')
      .polygonStrokeColor(() => '#111')
      .polygonAltitude(0.01)
      .htmlElementsData(MARKERS)
      .arcColor('color')
      .arcsData(arcsData)
      .arcStroke(0.5)
      .arcAltitude(0.15)
      .htmlElement(d => {
        const el = document.createElement('div');
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;
        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        el.addEventListener('mouseenter', () => {
          const tooltip = document.createElement('div');
          tooltip.style.position = 'absolute';
          tooltip.style.bottom = '20px';
          tooltip.style.right = '20px';
          tooltip.style.fontSize = '20px';
          tooltip.style.background = 'rgba(0, 0, 0, 0.6)';
          tooltip.style.color = 'white';
          tooltip.style.padding = '20px';
          tooltip.style.borderRadius = '3px';
          tooltip.style.pointerEvents = 'none';
        
          const label = document.createElement('div');
          label.textContent = d.label + " | " + d.date;
          tooltip.appendChild(label);
          document.body.appendChild(tooltip);
          el.addEventListener('mouseleave', () => {
            tooltip.remove();
          });
        });
    
        return el;
      });

      new THREE.TextureLoader().load(clouds, cloudsTexture => {
        if (world) {
          const globeRadius = world.getGlobeRadius();
          const clouds = new THREE.Mesh(
            new THREE.SphereGeometry(globeRadius * (1 + CLOUDS_ALT), 75, 75),
            new THREE.MeshPhongMaterial({
              map: cloudsTexture,
              transparent: true,
              opacity: 0.8
            })
          );
          
          world.scene().add(clouds);
          cloudsRef.current = clouds;

          const rotateClouds = () => {
            if (cloudsRef.current) {
              cloudsRef.current.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
              animationFrameRef.current = requestAnimationFrame(rotateClouds);
            }
          };

          rotateClouds();
        }
      });

      fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
          const maxVal = Math.max(...countries.features.map(getVal));
          colorScale.domain([0, maxVal]);
          world
            .polygonsData(countries.features)
            .polygonCapColor(() => 'transparent');
        });

      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.35;

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="travel-page">
        <div ref={globeContainerRef} className="globe-container"></div>
      </div>
    </div>
  );
}