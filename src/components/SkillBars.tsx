{/* Skill bars */ }
const skillGroups = [
    {
        category: 'No-Code & Bubble',
        skills: [
            { name: 'Bubble.io', level: 98, color: '#1B4EF3' },
            { name: 'Database Architecture', level: 94, color: '#6366f1' },
            { name: 'Workflow Automation', level: 95, color: '#8b5cf6' },
            { name: 'Custom Plugin Development', level: 88, color: '#a855f7' },
        ],
    },
    {
        category: 'Web Development',
        skills: [
            { name: 'React / Next.js', level: 90, color: '#61DAFB' },
            { name: 'JavaScript / TypeScript', level: 88, color: '#F7DF1E' },
            { name: 'HTML / CSS / Tailwind', level: 95, color: '#38BDF8' },
            { name: 'REST API Design', level: 92, color: '#22c55e' },
        ],
    },
    {
        category: 'Product & AI',
        skills: [
            { name: 'AI Integration (GPT / Claude)', level: 91, color: '#00A67E' },
            { name: 'Product Strategy & Scoping', level: 90, color: '#f59e0b' },
            { name: 'UI/UX & Figma', level: 87, color: '#F24E1E' },
            { name: 'Client Communication', level: 96, color: '#22d3ee' },
        ],
    },
]
function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
    return (
        <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--text)' }}>
                    {name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
                    {level}%
                </span>
            </div>
            <div style={{
                height: 6, background: 'var(--surface-2)', borderRadius: 99, overflow: 'hidden',
            }}>
                <div style={{
                    height: '100%',
                    width: `${level}%`,
                    borderRadius: 99,
                    background: `linear-gradient(90deg, ${color}cc, ${color})`,
                    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `0 0 8px ${color}44`,
                }} />
            </div>
        </div>
    )
}

export default function SkillBars() {
    return (
        <section id="skill_bars" style={{ padding: '120px 0', background: 'var(--bg)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div className="section-label" style={{ marginBottom: 16 }}>Proficiency</div>
                    <h3 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
                        Core <span className="gradient-text">Competencies</span>
                    </h3>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 24,
                }}>
                    {skillGroups.map(group => (
                        <div key={group.category} className="card" style={{ padding: 32 }}>
                            <h3 style={{
                                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                                color: 'var(--text)', marginBottom: 24,
                                display: 'flex', alignItems: 'center', gap: 10,
                            }}>
                                <span style={{
                                    width: 8, height: 8, borderRadius: '50%',
                                    background: group.skills[0].color,
                                    display: 'inline-block',
                                }} />
                                {group.category}
                            </h3>
                            {group.skills.map(s => (
                                <SkillBar key={s.name} {...s} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
