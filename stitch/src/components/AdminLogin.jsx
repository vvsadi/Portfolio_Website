import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) {
      setError(err.message);
    } else {
      onLogin();
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 16,
    border: '1px solid var(--line)',
    borderRadius: 10,
    background: 'var(--card)',
    color: 'var(--ink)',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color .15s ease',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--paper)',
        padding: 24,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          animation: 'pagein .45s cubic-bezier(.2,.8,.3,1) both',
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            margin: '0 0 8px',
          }}
        >
          Admin
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', margin: 0 }}>
          Sign in to manage your blog posts.
        </p>

        {error && (
          <p style={{ fontSize: 14, color: '#e0245e', margin: 0 }}>{error}</p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = 'var(--ink)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '14px 24px',
            fontSize: 16,
            fontWeight: 700,
            border: 'none',
            borderRadius: 10,
            background: 'var(--ink)',
            color: 'var(--paper)',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            transition: 'opacity .15s ease, transform .15s ease',
          }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
