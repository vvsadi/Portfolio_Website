import { useIsMobile } from '../hooks/useIsMobile';

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        maxWidth: 1180,
        margin: isMobile ? '48px auto 0' : '80px auto 0',
        padding: isMobile ? '24px 16px' : '24px 28px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 12 : undefined,
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
