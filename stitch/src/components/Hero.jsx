import { useState, useCallback, useRef } from 'react';
import Aditya from '../assets/Aditya Picture.jpeg';
import Aditya2 from '../assets/Aditya2.jpeg';
import Aditya3 from '../assets/Aditya3.jpeg';
import Aditya4 from '../assets/Aditya4.jpeg';
import Aditya5 from '../assets/Aditya5.jpg';
import Aditya6 from '../assets/Aditya6.jpg';
import Aditya7 from '../assets/Aditya7.jpeg';
import resumePDF from '../assets/Aditya Vemparala Resume.pdf';
import oracleLogo from '../assets/oracle.png';
import bmoLogo from '../assets/bmo-blue-on-transparent-en.png';
import radiantLogo from '../assets/radiant-logo.png';

const PHOTOS = [Aditya2, Aditya3, Aditya4, Aditya5, Aditya6, Aditya7];
const TOTAL = PHOTOS.length + 1;

function cardStyle(rel, exiting, dir) {
  const base = {
    position: 'absolute',
    inset: 0,
    borderRadius: 8,
    overflow: 'hidden',
    background: 'var(--card)',
    boxShadow: '0 16px 36px rgba(0,0,0,.16)',
    transformOrigin: '50% 120%',
    transition: 'transform .42s cubic-bezier(.3,.8,.3,1), opacity .32s ease',
  };
  if (exiting) return { ...base, transform: `translateX(${dir > 0 ? '118%' : '-118%'}) rotate(${dir > 0 ? 14 : -14}deg)`, opacity: 0, zIndex: 8 };
  if (rel === 0) return { ...base, transform: 'translate(0,0) rotate(0deg) scale(1)', opacity: 1, zIndex: 7 };
  if (rel === 1) return { ...base, transform: 'translate(0,0) rotate(-2deg) scale(.985)', opacity: 1, zIndex: 6 };
  if (rel === 2) return { ...base, transform: 'translate(0,0) rotate(2.5deg) scale(.97)', opacity: 1, zIndex: 5 };
  return { ...base, transform: 'translate(0,0) rotate(-3.5deg) scale(.955)', opacity: 1, zIndex: 4 };
}

export default function Hero() {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [exit, setExit] = useState(0);
  const busy = useRef(false);

  const swipe = useCallback((dir) => {
    if (busy.current) return;
    busy.current = true;
    setExit(dir);
    setTimeout(() => {
      setPhotoIdx((prev) => ((prev + dir + TOTAL) % TOTAL));
      setExit(0);
      busy.current = false;
    }, 320);
  }, []);

  const rel = (i) => ((i - photoIdx + TOTAL) % TOTAL);

  return (
    <>
      <section
        className="mx-auto"
        style={{
          maxWidth: 1180,
          padding: '76px 28px 88px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,.85fr)',
          gap: 56,
          alignItems: 'end',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: 'var(--paper)',
              background: 'var(--ink)',
              padding: '9px 16px',
              borderRadius: 999,
              marginBottom: 30,
              animation: 'rise .7s cubic-bezier(.2,.7,.3,1) .05s both',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--available-signal)', display: 'inline-block' }} />
            Available for new opportunities
          </div>

          <h1
            style={{
              fontSize: 'clamp(56px, 8.2vw, 104px)',
              lineHeight: '.92',
              fontWeight: 700,
              letterSpacing: '-0.045em',
              margin: '0 0 28px',
              animation: 'rise .8s cubic-bezier(.2,.7,.3,1) .15s both',
            }}
          >
            Aditya<br />Vemparala
          </h1>

          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              margin: '0 0 16px',
              maxWidth: '34ch',
              lineHeight: 1.3,
              animation: 'rise .8s cubic-bezier(.2,.7,.3,1) .28s both',
            }}
          >
            Bridging Business needs with AI-Powered Solutions. 
          </p>

          <p
            style={{
              fontSize: 17,
              color: 'var(--muted)',
              margin: '0 0 36px',
              maxWidth: '52ch',
              lineHeight: 1.6,
              animation: 'rise .8s cubic-bezier(.2,.7,.3,1) .38s both',
            }}
          >
            Business Analysis      |      Product      |      AI & Data Solutions
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              animation: 'rise .8s cubic-bezier(.2,.7,.3,1) .48s both',
            }}
          >
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="pill hover:-translate-y-0.5 transition-transform duration-200"
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '15px 26px',
                fontSize: 15,
              }}
            >
              Download résumé
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-v-v-s-b7614a13a/"
              target="_blank"
              rel="noopener noreferrer"
              className="pill hover:-translate-y-0.5 transition-transform duration-200"
              style={{
                border: '1px solid var(--line)',
                padding: '15px 26px',
                fontSize: 15,
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="relative"
          style={{ animation: 'rise .9s cubic-bezier(.2,.7,.3,1) .3s both' }}
        >
          <div
            className="absolute"
            style={{
              right: -14,
              bottom: -14,
              width: '78%',
              height: '78%',
              background: 'var(--ink)',
              borderRadius: 8,
            }}
          />
          <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
            {/* Main photo card */}
            <div style={cardStyle(rel(0), exit !== 0 && rel(0) === (exit > 0 ? 0 : TOTAL - 1), exit)}>
              <img
                src={Aditya}
                alt="Aditya Vemparala"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Photo cards */}
            {PHOTOS.map((src, k) => (
              <div key={k} style={cardStyle(rel(k + 1), exit !== 0 && rel(k + 1) === (exit > 0 ? 0 : TOTAL - 1), exit)}>
                <img src={src} alt={`Photo ${k + 2}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
            {/* Swipe nav buttons */}
            <div style={{ position: 'absolute', left: 14, bottom: 14, zIndex: 9, display: 'flex', gap: 8 }}>
              <button
                onClick={() => swipe(-1)}
                aria-label="Previous photo"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,.55)',
                  background: 'rgba(15,15,15,.42)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background .2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15,15,15,.78)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15,15,15,.42)'}
              >
                ←
              </button>
              <button
                onClick={() => swipe(1)}
                aria-label="Next photo"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,.55)',
                  background: 'rgba(15,15,15,.42)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background .2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15,15,15,.78)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15,15,15,.42)'}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Worked-with strip */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div
          className="mx-auto flex items-center flex-wrap"
          style={{ maxWidth: 1180, padding: 28, justifyContent: 'space-between', gap: 40 }}
        >
          <span className="mono-label" style={{ color: 'var(--ink)', flexShrink: 0 }}>Worked with</span>
          <div className="flex items-center flex-wrap" style={{ flex: 1, justifyContent: 'space-between', gap: 48 }}>
            <img src={oracleLogo} alt="Oracle" style={{ height: 64, width: 'auto', objectFit: 'contain', opacity: .85 }} />
            <img src={bmoLogo} alt="Bank of Montreal" style={{ height: 48, width: 'auto', objectFit: 'contain', opacity: .85 }} />
            <img src={radiantLogo} alt="Radiant Digital" style={{ height: 48, width: 'auto', objectFit: 'contain', opacity: .85 }} />
          </div>
        </div>
      </section>
    </>
  );
}
