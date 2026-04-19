import { Brain, Code2, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    Icon: Brain,
    title: 'AI-Powered Solutions',
    desc: 'Building intelligent systems using LangChain, CrewAI, and cutting-edge AI frameworks.',
  },
  {
    Icon: Code2,
    title: 'Automation Pipelines',
    desc: 'Designing end-to-end automation pipelines that eliminate repetitive tasks and human error.',
  },
  {
    Icon: Rocket,
    title: 'Rapid Deployment',
    desc: 'Delivering production-ready AI solutions quickly, from concept to deployment.',
  },
  {
    Icon: Users,
    title: 'Business Impact',
    desc: 'Focused on real outcomes — reduced manual work, increased productivity, measurable ROI.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span
              className="font-orbitron text-xs tracking-[0.3em] uppercase"
              style={{ color: '#a1a1aa' }}
            >
              About Me
            </span>
            <div className="section-line" />
          </div>
          <h2
            className="font-orbitron text-3xl md:text-4xl font-700 mb-6"
            style={{ color: '#ffffff' }}
          >
            Who I{' '}
            <span className="gradient-text">Am</span>
          </h2>
          <p
            className="font-inter text-base max-w-2xl leading-relaxed"
            style={{ color: '#a1a1aa', lineHeight: '1.8' }}
          >
            I'm <span style={{ color: '#00f0ff' }}>Rabianoor</span>, an AI Agent Developer and
            Automation Expert with 20+ completed projects. I specialize in building intelligent,
            automated systems that solve real business problems. With deep expertise in LangChain,
            CrewAI, and AI orchestration frameworks, I bridge the gap between raw AI capabilities
            and practical business solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="card-hover rounded-xl p-6 flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(124,58,237,0.1))',
                  border: '1px solid rgba(0,240,255,0.2)',
                }}
              >
                <Icon size={22} style={{ color: '#00f0ff' }} />
              </div>
              <h3
                className="font-orbitron text-sm font-600"
                style={{ color: '#ffffff' }}
              >
                {title}
              </h3>
              <p className="font-inter text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-8 md:p-12 grid md:grid-cols-3 gap-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,240,255,0.05), rgba(124,58,237,0.05))',
            border: '1px solid rgba(0,240,255,0.15)',
          }}
        >
          {[
            { value: '20+', label: 'Projects Completed', color: '#00f0ff' },
            { value: '3+', label: 'Certifications Earned', color: '#7c3aed' },
            { value: '∞', label: 'Problems Solved', color: '#00f0ff' },
          ].map(({ value, label, color }) => (
            <div key={label}>
              <div
                className="font-orbitron text-4xl font-700 mb-2"
                style={{ color }}
              >
                {value}
              </div>
              <div className="font-inter text-sm" style={{ color: '#a1a1aa' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
