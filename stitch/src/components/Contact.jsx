import { useIsMobile } from '../hooks/useIsMobile';

export default function Contact() {
  const isMobile = useIsMobile();

  const linkStyle = {
    color: 'var(--contact-fg)',
    borderBottom: '1px solid var(--contact-link-line)',
    paddingBottom: 10,
    textAlign: 'center',
    flex: 1,
    minWidth: 0,
  };

  return (
    <section id="contact" data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '64px 16px 0' : '110px 28px 0' }}>
      <div
        style={{
          background: 'var(--contact-bg)',
          color: 'var(--contact-fg)',
          border: '1px solid var(--contact-border)',
          borderRadius: 14,
          padding: isMobile ? '32px 20px' : 64,
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(34px, 4.4vw, 54px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            margin: '0 0 20px',
            lineHeight: 1,
          }}
        >
          Let's talk.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, opacity: .72, margin: '0 0 40px', maxWidth: '48ch' }}>
          I'm always open to discussing new opportunities, projects, or simply having a chat. Feel free to send me a message or email.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'stretch',
            justifyContent: 'space-between',
            gap: isMobile ? 16 : 24,
            fontSize: isMobile ? 14 : 16,
            flexWrap: 'wrap',
          }}
        >
          <a href="mailto:adityavemparalausa@gmail.com" style={linkStyle}>
            adityavemparalausa@gmail.com
          </a>
          <a
            href="https://github.com/vvsadi"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            github.com/vvsadi
          </a>
          <a href="tel:+19452513495" style={{ ...linkStyle, opacity: .85 }}>
            +1 (945) 251-3495
          </a>
        </div>
      </div>
    </section>
  );
}
