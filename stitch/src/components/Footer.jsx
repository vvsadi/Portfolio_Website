export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        maxWidth: 1180,
        margin: '80px auto 0',
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
        color: 'var(--muted)',
      }}
    >
      <span>© 2024 Aditya VVS</span>
      <div style={{ display: 'flex', gap: 20 }}>
        <a href="mailto:adityavemparalausa@gmail.com" style={{ color: 'var(--muted)', transition: 'color .18s ease' }}>Email</a>
        <a href="https://www.linkedin.com/in/aditya-v-v-s-b7614a13a/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color .18s ease' }}>LinkedIn</a>
        <a href="https://github.com/vvsadi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color .18s ease' }}>GitHub</a>
      </div>
    </footer>
  );
}
