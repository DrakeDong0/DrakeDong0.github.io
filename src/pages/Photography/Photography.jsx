import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import './Photography.css';
import '../../Components/style.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import imgPortoMoto      from '../../assets/photography/portugal/porto_moto.jpg';
import imgPinwheel       from '../../assets/photography/portugal/pinwheel.jpg';
import imgLisbonYellow   from '../../assets/photography/portugal/lisbon_yellow.jpg';
import imgCascaisArch    from '../../assets/photography/portugal/cascais_arch.jpg';
import imgSintraDaisy    from '../../assets/photography/portugal/sintra_daisy.jpg';
import imgRocaCoast      from '../../assets/photography/portugal/roca_coast.jpg';
import imgOrangeTree     from '../../assets/photography/portugal/orange_tree.jpg';
import imgSeaArch        from '../../assets/photography/portugal/sea_arch.jpg';
import imgAlgarveCliff   from '../../assets/photography/portugal/algarve_cliff.jpg';
import imgPiedadeFlower  from '../../assets/photography/portugal/piedade_flower.jpg';
import imgPineapple      from '../../assets/photography/portugal/pineapple.jpg';
import imgSeaStack       from '../../assets/photography/portugal/sea_stack.jpg';
import imgMadeiraPools   from '../../assets/photography/portugal/madeira_pools.jpg';
import imgMadeiraLevada  from '../../assets/photography/portugal/madeira_levada.jpg';
import imgLighthouse     from '../../assets/photography/portugal/lighthouse_window.jpg';
import imgRedLamp        from '../../assets/photography/portugal/red_lamp.jpg';
import imgPt002          from '../../assets/photography/portugal/pt_002.jpg';

import imgMusicians      from '../../assets/photography/people/musicians.jpg';
import imgReader         from '../../assets/photography/people/reader.jpg';
import imgPt001          from '../../assets/photography/people/pt_001.jpg';
import imgPeople001      from '../../assets/photography/people/people_001.jpg';

import imgExtras001      from '../../assets/photography/extras/extras_001.jpg';

const TABS = [
  {
    id: 'portugal',
    label: 'Portugal',
    span: 'May 2026',
    rolls: 'Fuji XT-30 III 70-300mm f/4-5.6, 23mm f/2.8',
    rows: [
      { type: 'landscape', photos: [
        { id: 'p07', src: imgRocaCoast,    place: 'Sines',               when: 'Apr 27, 2026' },
      ]},
      { type: 'portraits', photos: [
        { id: 'p02', src: imgPortoMoto,   place: 'Porto',                               when: 'Apr 28, 2026' },
        { id: 'p03', src: imgPinwheel,    place: 'Alfama, Lisbon',                 when: 'Apr 28, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p04', src: imgLisbonYellow, place: 'Baixa de Lisboa, Lisbon',          when: 'Apr 28, 2026' },
      ]},
      { type: 'square', photos: [
        { id: 'p05', src: imgCascaisArch,  place: 'Praia Grande Beach, Sintra',                            when: 'Apr 27, 2026' },
        { id: 'p06', src: imgSintraDaisy,  place: 'Sintra',                             when: 'Apr 27, 2026' },
      ]},
      { type: 'portraits', photos: [
        { id: 'p08', src: imgOrangeTree,   place: 'Algarve Coast',                              when: 'Apr 27, 2026' },
        { id: 'p09', src: imgAlgarveCliff, place: 'Cabo Da Roca, Sintra',                      when: 'Apr 29, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p12', src: imgRedLamp,      place: 'Quinta da regaleira, Sintra',                              when: 'Apr 27, 2026' },
      ]},
      { type: 'portraits', photos: [
        { id: 'p10', src: imgSeaArch,      place: 'Cabo Da Roca, Sintra',          when: 'Apr 29, 2026' },
        { id: 'p11', src: imgSeaStack,     place: 'Cabo Da Roca, Sintra',            when: 'May 1, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p13', src: imgPiedadeFlower,place: 'Cabo Da Roca, Sintra',            when: 'Apr 29, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p20', src: imgPt002,        place: 'Fortaleza de Valença, A Guarda',                           when: 'May 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p14', src: imgPineapple,    place: 'Cabo Da Roca, Sintra',                when: 'Apr 29, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p17', src: imgMadeiraLevada,place: 'Peneda-Gerês National Park',           when: 'May 4, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p15', src: imgLighthouse,   place: 'Castro de Santa Trega, A Guarda',     when: 'May 3, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'p16', src: imgMadeiraPools, place: 'Porto Moniz, Madeira',               when: 'May 6, 2026' },
      ]},
    ],
  },
  {
    id: 'people',
    label: 'People',
    span: '2026',
    rolls: 'Fuji XT-30 III 70-300mm f/4-5.6, 23mm f/2.8',
    rows: [
      { type: 'landscape', photos: [
        { id: 'pp01', src: imgMusicians,  place: 'Miradouro das Portas do Sol, Lisbon', when: 'Apr 28, 2026' },
      ]},
      { type: 'portraits', photos: [
        { id: 'pp02', src: imgPeople001,  place: 'Toronto', when: 'April 11, 2026' },
        { id: 'pp03', src: imgReader,     place: 'Miragaia, Porto', when: 'April 28, 2026',                              when: 'Apr 28, 2026' },
      ]},
      { type: 'landscape', photos: [
        { id: 'pp04', src: imgPt001,      place: 'Fortaleza de Valença, A Guarda', when: 'May 3, 2026' },
      ]},
    ],
  },
  {
    id: 'extras',
    label: 'Extras',
    span: '2026',
    rolls: 'Fuji XT-30 III 70-300mm f/4-5.6, 23mm f/2.8',
    rows: [
      { type: 'landscape', photos: [
        { id: 'ex01', src: imgExtras001, place: 'Port Elgin, Ontario', when: 'May 20, 2026' },
      ]},
    ],
  },
];

// ─── Lightbox ────────────────────────────────────────────────────────────────

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];
  const total = photos.length;
  const pad = (n) => String(n).padStart(2, '0');
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => { setImgLoaded(false); }, [index]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   onPrev();
      if (e.key === 'ArrowRight')  onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb-overlay" role="dialog" aria-modal="true" aria-labelledby="lb-place">
      {/* Top bar */}
      <div className="lb-topbar">
        <span className="lb-counter">{pad(index + 1)} / {pad(total)}</span>
        <button className="lb-close" onClick={onClose}>close ✕</button>
      </div>

      {/* Stage */}
      <div className="lb-stage">
        <button className="lb-nav lb-prev" onClick={onPrev} aria-label="Previous photo">
          <ChevronLeft />
        </button>
        <div className={`lb-frame lb-frame--${photo.orientation}`}>
          {!imgLoaded && <div className="lb-spinner"><div className="lb-spinner-ring" /></div>}
          <img
            src={photo.src}
            alt={photo.place}
            onLoad={() => setImgLoaded(true)}
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
        </div>
        <button className="lb-nav lb-next" onClick={onNext} aria-label="Next photo">
          <ChevronRight />
        </button>
      </div>

      {/* Bottom caption */}
      <div className="lb-caption">
        <span id="lb-place" className="lb-caption-place">{photo.place}</span>
        <span className="lb-caption-when">{photo.when}</span>
      </div>
    </div>
  );
}

// ─── Photo card ──────────────────────────────────────────────────────────────

function Shot({ photo, index, orientation, onClick }) {
  const pad = (n) => String(n + 1).padStart(2, '0');
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="shot" onClick={onClick} style={{ cursor: 'zoom-in' }}>
      <div className={`shot-frame shot-frame--${orientation}`}>
        {!loaded && <div className="shot-shimmer" />}
        <img
          src={photo.src}
          alt={photo.place}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
        />
        <span className="shot-index">№ {pad(index)}</span>
      </div>
      <figcaption className="shot-caption">
        <span className="shot-place">{photo.place}</span>
        <span className="shot-when">{photo.when}</span>
      </figcaption>
    </figure>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function Photography() {
  const { gallery } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => { setLightboxIndex(-1); }, [gallery]);

  const activeTab = useMemo(() => TABS.find(t => t.id === gallery), [gallery]);

  const flatPhotos = useMemo(() =>
    activeTab?.rows?.flatMap(row =>
      row.photos.map(p => ({ ...p, orientation: row.type === 'landscape' ? 'landscape' : row.type === 'square' ? 'square' : 'portrait' }))
    ) ?? [],
    [activeTab]
  );

  const onOpen  = useCallback((i) => setLightboxIndex(i), []);
  const onClose = useCallback(() => setLightboxIndex(-1), []);
  const onPrev  = useCallback(() => setLightboxIndex(i => (i - 1 + flatPhotos.length) % flatPhotos.length), [flatPhotos.length]);
  const onNext  = useCallback(() => setLightboxIndex(i => (i + 1) % flatPhotos.length), [flatPhotos.length]);

  const flatIndexMap = useMemo(() => {
    const map = {};
    flatPhotos.forEach((p, i) => { map[p.id] = i; });
    return map;
  }, [flatPhotos]);

  if (!gallery || !activeTab) return <Navigate to="/Photography/portugal" replace />;

  return (
    <div className="pg-root">
      <Header />

      {/* Photography-specific sticky tab bar */}
      <nav className="pg-tabbar" role="tablist" aria-label="Photography locations">
        <div className="pg-tabbar-inner">
          {TABS.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={tab.id === gallery}
              className={`pg-tab${tab.id === gallery ? ' pg-tab--active' : ''}`}
              onClick={() => { setLightboxIndex(-1); navigate(`/Photography/${tab.id}`); }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="pg-hero" id="feed-panel" role="tabpanel">
        <div className="pg-hero-inner">
          <h1 className="pg-hero-title">
            {activeTab?.label}<em className="pg-hero-period">.</em>
          </h1>
          <div className="pg-meta">
            <div className="pg-meta-row">
              <span className="pg-meta-label">Date</span>
              <span className="pg-meta-value">{activeTab?.span}</span>
            </div>
            <div className="pg-meta-row pg-meta-row--last">
              <span className="pg-meta-label">Medium</span>
              <span className="pg-meta-value">{activeTab?.rolls}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo feed */}
      <main className="pg-feed">
        {activeTab?.rows?.map((row, ri) => {
          if (row.type === 'landscape') {
            return (
              <div key={ri} className="pg-row pg-row--landscape">
                <Shot
                  key={row.photos[0].id}
                  photo={row.photos[0]}
                  index={flatIndexMap[row.photos[0].id]}
                  orientation="landscape"
                  onClick={() => onOpen(flatIndexMap[row.photos[0].id])}
                />
              </div>
            );
          }
          const orientation = row.type === 'square' ? 'square' : 'portrait';
          const rowClass = row.type === 'square' ? 'pg-row--squares' : 'pg-row--portraits';
          return (
            <div key={ri} className={`pg-row ${rowClass}`}>
              {row.photos.map(photo => (
                <Shot
                  key={photo.id}
                  photo={photo}
                  index={flatIndexMap[photo.id]}
                  orientation={orientation}
                  onClick={() => onOpen(flatIndexMap[photo.id])}
                />
              ))}
            </div>
          );
        })}
      </main>

      {/* Page footer */}
      <div className="pg-footer">
        <div className="pg-footer-inner">
          <span>© stills archive</span>
          <span className="pg-footer-hint">
            Press <kbd>[esc]</kbd> to close · <kbd>[← →]</kbd> to browse
          </span>
        </div>
      </div>

      <Footer />

      {lightboxIndex >= 0 && (
        <Lightbox
          photos={flatPhotos}
          index={lightboxIndex}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
}
