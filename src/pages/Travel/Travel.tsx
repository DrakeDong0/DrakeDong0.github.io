import './Travel.css';
import "../../Components/style.css";
import Header from "../../Components/Header/Header";
import React, { useRef, useEffect } from 'react';
import Globe from 'globe.gl';
import { scaleSequentialSqrt } from 'd3-scale';
import { interpolateYlOrRd } from 'd3-scale-chromatic';
import * as THREE from 'three';
const clouds = "/clouds.png";

interface CountryProperties {
  GDP_MD_EST: number;
  POP_EST: number;
  ADMIN: string;
  ISO_A2: string;
}

interface Feature {
  type: string;
  properties: CountryProperties;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}

const CLOUDS_ALT = 0.004;
const CLOUDS_ROTATION_SPEED = 0.01;


export default function TravelPage() {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<THREE.Mesh | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (globeContainerRef.current) {
      const colorScale = scaleSequentialSqrt(interpolateYlOrRd);
      const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
      const world = new Globe(globeContainerRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .lineHoverPrecision(0)
      .polygonSideColor(() => 'white')
      .polygonStrokeColor(() => '#111')
      .polygonsTransitionDuration(300)
      .polygonAltitude(() => 0.01)
      .polygonLabel((obj: any) => {
        const d = obj.properties;
        return `
          <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
        `;
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

          // Animation function
          const rotateClouds = () => {
            if (cloudsRef.current) {
              cloudsRef.current.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
              animationFrameRef.current = requestAnimationFrame(rotateClouds);
            }
          };

          // Start animation
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
            .polygonCapColor(() => 'transparent')
            // .onPolygonHover(hoverD => myGlobe
            //   .polygonAltitude(d => d === hoverD ? 0.12 : 0.01)
            // );
        });
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.35;
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
