import { useIsMobile } from '../hooks/useIsMobile';
import UTD from '../assets/UTD.png';
import VIT from '../assets/VIT.png';
import cspo from '../assets/CSPO.png';
import ociAI from '../assets/OCI AI.png';
import oci from '../assets/OCI Foundations.png';

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '64px 16px 0' : '100px 28px 0' }}>
      <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'column' : undefined, gridTemplateColumns: isMobile ? undefined : 'minmax(0,1fr) minmax(0,1fr)', gap: isMobile ? 40 : 64 }}>
        <div>
          <h2 className="section-heading" style={{ margin: '0 0 26px' }}>
            I sit between technology, data, and business.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--muted)', margin: '0 0 16px' }}>
            Hi, I'm Aditya. With experience in Consulting, Business Analysis, technical solution ideation, and product ownership, I enjoy translating complex business problems into practical digital solutions.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
            My approach combines structured problem solving with data-driven insights, technical curiosity, and product thinking to ensure that every feature built aligns with real user needs and clear business outcomes.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <h3 className="mono-label" style={{ color: 'var(--ink)', margin: '0 0 18px' }}>Education &amp; honors</h3>
            <div style={{ display: 'flex', gap: 16, paddingBottom: 22, borderBottom: '1px solid var(--line)' }}>
              <img src={UTD} alt="UTD" style={{ width: 40, height: 40, objectFit: 'contain', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>MS in IT &amp; Management</h4>
                <p style={{ fontSize: 14, color: 'var(--muted)', margin: '3px 0 10px' }}>The University of Texas at Dallas · GPA 3.888</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '5px 10px', background: 'var(--chip)', border: '1px solid var(--line)', color: 'var(--ink)', fontWeight: 500, borderRadius: 999 }}>Beta Gamma Sigma</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '5px 10px', background: 'var(--chip)', border: '1px solid var(--line)', color: 'var(--ink)', fontWeight: 500, borderRadius: 999 }}>Dean's Council</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '5px 10px', background: 'var(--chip)', border: '1px solid var(--line)', color: 'var(--ink)', fontWeight: 500, borderRadius: 999 }}>Student Leadership Council</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '5px 10px', background: 'var(--chip)', border: '1px solid var(--line)', color: 'var(--ink)', fontWeight: 500, borderRadius: 999 }}>Nash Leader</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '5px 10px', background: 'var(--chip)', border: '1px solid var(--line)', color: 'var(--ink)', fontWeight: 500, borderRadius: 999 }}>Impact Award</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, paddingTop: 22 }}>
              <img src={VIT} alt="VIT" style={{ width: 40, height: 40, objectFit: 'contain', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>B.Tech, Electronics &amp; Communication Engineering</h4>
                <p style={{ fontSize: 14, color: 'var(--muted)', margin: '3px 0 0' }}>Vellore Institute of Technology · GPA 8.14</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mono-label" style={{ color: 'var(--ink)', margin: '0 0 18px' }}>Certifications</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0,1fr))' : 'repeat(3, minmax(0,1fr))', gap: 12 }}>
              <a
                data-reveal
                href="#"
                style={{
                  border: '1px solid var(--line)', borderRadius: 10, padding: '18px 14px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  textAlign: 'center', background: 'var(--card)',
                  transition: 'transform .25s cubic-bezier(.2,.7,.3,1), border-color .25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}
              >
                <img src={cspo} alt="Certified Scrum Product Owner" style={{ width: 56, height: 56, objectFit: 'contain' }} />
                <span style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.35 }}>Certified Scrum Product Owner</span>
              </a>
              <a
                data-reveal
                href="#"
                style={{
                  border: '1px solid var(--line)', borderRadius: 10, padding: '18px 14px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  textAlign: 'center', background: 'var(--card)',
                  transition: 'transform .25s cubic-bezier(.2,.7,.3,1), border-color .25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}
              >
                <img src={ociAI} alt="OCI AI Foundations Associate" style={{ width: 56, height: 56, objectFit: 'contain' }} />
                <span style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.35 }}>OCI AI Foundations Associate</span>
              </a>
              <a
                data-reveal
                href="#"
                style={{
                  border: '1px solid var(--line)', borderRadius: 10, padding: '18px 14px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  textAlign: 'center', background: 'var(--card)',
                  transition: 'transform .25s cubic-bezier(.2,.7,.3,1), border-color .25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}
              >
                <img src={oci} alt="OCI Foundations Associate" style={{ width: 56, height: 56, objectFit: 'contain' }} />
                <span style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.35 }}>OCI Foundations Associate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
