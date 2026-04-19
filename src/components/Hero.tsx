import { useEffect, useState } from 'react';
import { ChevronDown, Bot, Cpu, Workflow } from 'lucide-react';

const roles = [
  'AI Agent Developer',
  'Automation Expert',
  'LangChain Engineer',
  'Chatbot Builder',
  'Workflow Architect',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="scan-line absolute inset-0" />

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00f0ff, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24 pb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="section-line" />
            <span
              className="font-orbitron text-xs tracking-[0.3em] uppercase"
              style={{ color: '#a1a1aa' }}
            >
              AI & Automation
            </span>
          </div>

          <h1 className="font-orbitron font-900 mb-4" style={{ lineHeight: 1.1 }}>
            <span className="block text-4xl md:text-5xl lg:text-6xl" style={{ color: '#ffffff' }}>
              Hi, I'm
            </span>
            <span
              className="block text-4xl md:text-5xl lg:text-6xl mt-2 glow-cyan"
              style={{ color: '#00f0ff' }}
            >
              Rabianoor
            </span>
          </h1>

          <div className="flex items-center gap-3 mb-6 min-h-[36px]">
            <span className="text-lg md:text-xl font-inter" style={{ color: '#a1a1aa' }}>
              I'm a{' '}
            </span>
            <span
              className="text-lg md:text-xl font-inter font-600 cursor-blink"
              style={{ color: '#7c3aed' }}
            >
              {displayed}
            </span>
          </div>

          <p
            className="font-inter text-base leading-relaxed mb-10 max-w-lg"
            style={{ color: '#a1a1aa', lineHeight: '1.75' }}
          >
            I help businesses automate workflows and build AI-powered systems. From intelligent
            chatbots and AI agents to complex automation pipelines — I create solutions that reduce
            manual work and maximize productivity.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-purple font-orbitron text-xs tracking-widest px-7 py-3 rounded"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="btn-cyan font-orbitron text-xs tracking-widest px-7 py-3 rounded"
            >
              LET'S TALK
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12">
            {[
              { value: '20+', label: 'Projects' },
              { value: '3+', label: 'Certifications' },
              { value: '100%', label: 'Dedication' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-orbitron text-2xl font-700"
                  style={{ color: '#00f0ff' }}
                >
                  {s.value}
                </div>
                <div className="font-inter text-xs mt-1" style={{ color: '#a1a1aa' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div
              className="w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center animate-float"
              style={{
                background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(124,58,237,0.1))',
                border: '1px solid rgba(0,240,255,0.3)',
                boxShadow: '0 0 60px rgba(0,240,255,0.15), 0 0 120px rgba(124,58,237,0.1)',
              }}
            >
              <div
                className="w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,240,255,0.05), rgba(124,58,237,0.05))',
                  border: '1px solid rgba(124,58,237,0.3)',
                }}
              >
                <Bot size={80} strokeWidth={1} style={{ color: '#00f0ff' }} />
              </div>
            </div>

            {[
              { Icon: Cpu, label: 'LangChain', pos: '-top-4 -left-4', color: '#00f0ff' },
              { Icon: Workflow, label: 'CrewAI', pos: '-bottom-4 -right-4', color: '#7c3aed' },
            ].map(({ Icon, label, pos, color }) => (
              <div
                key={label}
                className={`absolute ${pos} flex items-center gap-2 px-4 py-2 rounded-lg`}
                style={{
                  background: 'rgba(10,10,10,0.9)',
                  border: `1px solid ${color}40`,
                  boxShadow: `0 0 15px ${color}20`,
                }}
              >
                <Icon size={14} style={{ color }} />
                <span className="font-orbitron text-xs" style={{ color }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: '#a1a1aa' }}
      >
        <span className="font-inter text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
