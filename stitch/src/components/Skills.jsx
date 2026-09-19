const skillGroups = [
  {
    name: 'Product Management',
    items: ['Product Strategy', 'Agile / Scrum', 'Product Roadmapping', 'Stakeholder Communication', 'User Story Writing'],
  },
  {
    name: 'AI and Data',
    items: ['Large Language Models (LLMs)', 'RAG Architecture', 'Knowledge Graphs', 'Data Analysis', 'Prompt Engineering'],
  },
  {
    name: 'Engineering',
    items: ['Python / Flask', 'React.js', 'SQL / PostgreSQL', 'AWS Services', 'API Development'],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '100px 28px 0' }}>
      <h2 className="section-heading" style={{ margin: '0 0 40px' }}>Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
        {skillGroups.map((g) => (
          <div
            key={g.name}
            data-reveal
            style={{
              border: '1px solid var(--line)',
              borderRadius: 10,
              padding: 28,
              background: 'var(--card)',
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 20px' }}>{g.name}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {g.items.map((it) => (
                <div
                  key={it}
                  style={{
                    fontSize: 15,
                    padding: '10px 0',
                    borderTop: '1px solid var(--line)',
                    color: 'var(--ink)',
                    opacity: 0.82,
                  }}
                >
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
