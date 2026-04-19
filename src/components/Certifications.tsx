import { Award, CheckCircle, Shield } from 'lucide-react';

const certs = [
  {
    Icon: Award,
    title: 'AI & Automation Mastery',
    issuer: 'Skill2Success',
    description:
      'Comprehensive course covering AI agent development, automation workflows, and building production-ready AI systems from scratch.',
    badge: 'Completed',
    color: '#00f0ff',
    skills: ['AI Agents', 'LangChain', 'Automation', 'Python'],
  },
  {
    Icon: Shield,
    title: 'Cisco Verified Certification',
    issuer: 'Cisco',
    description:
      'Cisco-verified certification demonstrating proficiency in networking concepts, systems, and technology infrastructure fundamentals.',
    badge: 'Verified',
    color: '#7c3aed',
    skills: ['Networking', 'Systems', 'Infrastructure', 'Technology'],
  },
  {
    Icon: CheckCircle,
    title: '20+ Project Portfolio',
    issuer: 'Self-Verified',
    description:
      'Successfully delivered 20+ projects across AI agent development, chatbot building, automation pipelines, and intelligent system design.',
    badge: '20+ Projects',
    color: '#00f0ff',
    skills: ['LangChain', 'CrewAI', 'Chatbots', 'RAG Systems'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(124,58,237,0.07), transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span
              className="font-orbitron text-xs tracking-[0.3em] uppercase"
              style={{ color: '#a1a1aa' }}
            >
              Credentials
            </span>
            <div className="section-line" />
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-700" style={{ color: '#ffffff' }}>
            Certifications &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map(({ Icon, title, issuer, description, badge, color, skills }) => (
            <div
              key={title}
              className="card-hover rounded-xl p-7 flex flex-col gap-5"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${color}12`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <span
                  className="font-orbitron text-xs px-3 py-1.5 rounded-full animate-pulse-cyan"
                  style={{
                    color,
                    background: `${color}10`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  {badge}
                </span>
              </div>

              <div>
                <h3
                  className="font-orbitron text-base font-600 mb-1"
                  style={{ color: '#ffffff' }}
                >
                  {title}
                </h3>
                <p className="font-inter text-xs mb-3" style={{ color }}>
                  Issued by {issuer}
                </p>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="font-inter text-xs px-3 py-1 rounded-full"
                    style={{
                      color: '#a1a1aa',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
