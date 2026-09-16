export default function Contact() {
  return (
    <section id="contact" data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '110px 28px 0' }}>
      <div
        style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          borderRadius: 14,
          padding: 64,
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 64,
        }}
      >
        <div>
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
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: .72, margin: '0 0 36px', maxWidth: '40ch' }}>
            Interested in collaborating on a product or discussing the latest in AI? I'm always open to talking shop.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 16 }}>
            <a href="mailto:adityavemparalausa@gmail.com" style={{ color: 'var(--paper)', borderBottom: '1px solid var(--onInkLine)', paddingBottom: 10 }}>
              adityavemparalausa@gmail.com
            </a>
            <a href="https://github.com/vvsadi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', borderBottom: '1px solid var(--onInkLine)', paddingBottom: 10 }}>
              github.com/vvsadi
            </a>
            <span style={{ opacity: .72, paddingBottom: 10 }}>+1 (945) 251-3495</span>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <input
              placeholder="Name"
              className="on-ink"
              style={{
                background: 'transparent',
                border: '1px solid var(--onInkLine)',
                borderRadius: 8,
                padding: '15px 16px',
                color: 'var(--paper)',
                fontSize: 15,
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <input
              placeholder="Email"
              type="email"
              className="on-ink"
              style={{
                background: 'transparent',
                border: '1px solid var(--onInkLine)',
                borderRadius: 8,
                padding: '15px 16px',
                color: 'var(--paper)',
                fontSize: 15,
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <textarea
            rows={6}
            placeholder="What's on your mind?"
            className="on-ink"
            style={{
              background: 'transparent',
              border: '1px solid var(--onInkLine)',
              borderRadius: 8,
              padding: '15px 16px',
              color: 'var(--paper)',
              fontSize: 15,
              width: '100%',
              boxSizing: 'border-box',
              resize: 'vertical',
            }}
          />
          <button
            type="submit"
            style={{
              background: 'var(--paper)',
              color: 'var(--ink)',
              border: 0,
              borderRadius: 999,
              padding: 16,
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
