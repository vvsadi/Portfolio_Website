const roles = [
  {
    dates: 'Aug 2025 – Present',
    role: 'AI Business Analyst',
    company: 'Radiant Digital',
    location: 'Vienna, VA, USA',
    points: [
      'Architecting AI solutions using Knowledge Graphs, RAG, Text-to-SQL, and intelligent model routing.',
      'Translating business needs into AI workflows, system architectures, user stories, and product roadmaps.',
      'Optimizing AI systems through token-cost reduction, retrieval benchmarking, automation, and human-in-the-loop design.'
    ],
  },
  {
    dates: 'Jun 2024 – Aug 2024',
    role: 'Software Developer Intern',
    company: 'Bank of Montreal',
    location: 'Irving, TX, USA',
    points: [
      'Modernizing backend architecture from Java to Python.',
      'Building serverless applications with AWS Lambda.',
      'Developing and documenting robust REST APIs.',
    ],
  },
  {
    dates: 'Sep 2022 – Feb 2023',
    role: 'Staff Consultant',
    company: 'Oracle',
    location: 'Hyderabad, India',
    points: [
      'Led functional delivery of Oracle Fusion HCM modules, supporting enterprise HR transformations for large organizations.',
      'Worked closely with clients to analyze HR processes and translate HR requirements into technical solutions across Core HR, Absence Management, and related modules.',
      'Guided testing, validation, and deployment activities to ensure smooth implementation and adoption of HR technology solutions.',
    ],
  },
  {
    dates: 'Sep 2020 – Aug 2022',
    role: 'Associate Consultant',
    company: 'Oracle',
    location: 'Hyderabad, India',
    points: [
      'Worked on enterprise Oracle Fusion HCM implementations, helping configure and deliver Core HR and Absence Management solutions.',
      'Designed and automated HR workflows to streamline processes like leave management, employee records, and policy compliance.',
      'Developed analytical reporting solutions to track compliance adherence workflows.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '100px 28px 0' }}>
      <h2 className="section-heading" style={{ margin: '0 0 44px' }}>Where I've worked</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {roles.map((r, i) => (
          <div
            key={i}
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: '180px minmax(0, 1fr)',
              gap: 40,
              padding: '30px 0',
              borderTop: '1px solid var(--line)',
              transition: 'padding-left .25s cubic-bezier(.2,.7,.3,1)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '14px'; }}
            onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0'; }}
          >
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 500, color: 'var(--ink)', margin: '0 0 8px' }}>{r.dates}</p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontStyle: 'italic', color: 'var(--muted)', margin: '0 0 8px' }}>{r.location}</p> 
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{r.role}</h3>
                <span style={{ fontSize: 16, color: 'var(--muted)' }}>{r.company}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--muted)', fontSize: 15, lineHeight: 1.55 }}>
                {r.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
