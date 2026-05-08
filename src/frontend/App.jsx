import { useState, useEffect } from 'preact/hooks';
import logoSmi from './smi.png';

// For this strictly structural integration phase, we wrap the vanilla mount
// without altering the UI or logic to maintain identical CSS and user paths.

export function App() {
  useEffect(() => {
    // Dynamically load the legacy scripts ONLY after the Preact DOM wrapper has actually mounted!
    import('./assets/js/map.js').then(() => {
      import('./assets/js/app.js');
    });
  }, []);

  return (
    <div id="preact-wrapper">
      
      {/* --- HEADER --- */}
      <div class="hdr">
        <div class="hdr-l">
          {/* Bagian Logo Gambar */}
          <div style={{ background: 'transparent', padding: '0', marginRight: '12px', display: 'flex', alignItems: 'center' }}>
            <img src={logoSmi} alt="Logo Sukabumi" style={{ height: '45px', width: 'auto' }} />
          </div>
          
          {/* Teks Sebelah Logo (Judul Portal) */}
          <div class="hdr-t" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <strong style={{ fontSize: '18px', color: 'var(--sage)', marginBottom: '2px' }}>Portal Pantau Anggaran Kota Sukabumi</strong>
            <span style={{ fontSize: '12px' }}>Artifact hasil analyze &middot; LKPP / SiRUP &middot; Tahun Anggaran 2026</span>
          </div>
        </div>
        
        <div class="hdr-r">
          <div class="ll">
            <span class="ldot"></span> LIVE
          </div>
          <div class="yr">TA 2026</div>
        </div>
      </div>

      {/* --- KONTEN BAWAH --- */}
      <div class="kpi" id="kpi"></div>
      
      <div class="ml">
        <div class="mc">
          <div id="map"></div>
          <div class="moc" id="mf"></div>
          <div class="mlb" id="legend"></div>
        </div>
        
        <div class="sb">
          <div class="sbh" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div class="sbt" id="tabs"></div>
            <button class="stb" id="toggleMapBtn" onClick={() => window['dashboardActions'] && window['dashboardActions'].toggleMap()}>&#128506; Sembunyikan Peta</button>
          </div>
          <div class="sbc" id="sbc"></div>
        </div>
      </div>

      {/* --- MODAL --- */}
      <div class="modal-overlay" id="rupModal">
        <div class="modal">
          <div class="modal-top" id="modalTop"></div>
          <div class="modal-body" id="modalBody"></div>
          <div class="modal-footer">
            Map memakai agregasi penuh untuk paket multi-lokasi &middot; KPI nasional tidak menduplikasi paket multi-lokasi
          </div>
        </div>
      </div>

    </div>
  );
}