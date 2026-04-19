import { useEffect, useRef, useState } from 'react';

const techStack = [
  { name: 'LangChain', level: 90, category: 'AI Frameworks' },
  { name: 'CrewAI', level: 85, category: 'AI Frameworks' },
  { name: 'Python', level: 88, category: 'Languages' },
  { name: 'AI Agents', level: 92, category: 'AI Frameworks' },
  { name: 'Chatbot Development', level: 90, category: 'Specialization' },
  { name: 'Automation Pipelines', level: 88, category: 'Specialization' },
  { name: 'File Handling & Processing', level: 82, category: 'Tools' },
  { name: 'Prompt Engineering', level: 87, category: 'AI Frameworks' },
];

const tools = [
  'LangChain', 'CrewAI', 'OpenAI API', 'Python', 'AI Agents',
  'Chatbots', 'Workflow Automation', 'File Processing',
  'Prompt Engineering', 'RAG Systems', 'Vector Databases',
  'API Integration', 'Business Automation', 'NLP',
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-inter text-sm font-500" style={{ color: '#ffffff' }}>
          {name}
        </span>
        <span className="font-orbitron text-xs" style={{ color: '#00f0ff' }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.08), transparent 60%)',
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
              Tech Stack
            </span>
            <div className="section-line" />
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-700" style={{ color: '#ffffff' }}>
            Skills &{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3
              className="font-orbitron text-sm tracking-widest mb-8 uppercase"
              style={{ color: '#00f0ff' }}
            >
              Proficiency Levels
            </h3>
            {techStack.map((s) => (
              <SkillBar key={s.name} {...s} animate={animate} />
            ))}
          </div>

          <div>
            <h3
              className="font-orbitron text-sm tracking-widest mb-8 uppercase"
              style={{ color: '#7c3aed' }}
            >
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {tools.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div
              className="rounded-xl p-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(0,240,255,0.15)',
              }}
            >
              <h3
                className="font-orbitron text-sm tracking-widest mb-4 uppercase"
                style={{ color: '#00f0ff' }}
              >
                What I Build
              </h3>
              <ul className="space-y-3">
                {[
                  'Intelligent AI Agents & Chatbots',
                  'Automated Business Workflows',
                  'RAG-powered Q&A Systems',
                  'Cold Email & Content Generators',
                  'Multi-agent AI Pipelines',
                  'File Processing Automations',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-inter text-sm" style={{ color: '#a1a1aa' }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#00f0ff' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
