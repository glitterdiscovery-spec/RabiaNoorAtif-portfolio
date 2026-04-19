import { BookOpen, Mail, Bot, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    Icon: BookOpen,
    title: 'Smart Book Q&A',
    description:
      'An AI-powered Q&A system that lets users upload books and ask questions. Built with RAG (Retrieval Augmented Generation) using LangChain and vector databases for intelligent, context-aware answers.',
    tags: ['LangChain', 'RAG', 'Vector DB', 'Python', 'NLP'],
    type: 'AI Agent',
    featured: true,
    color: '#00f0ff',
  },
  {
    Icon: Mail,
    title: 'Cold Email Generator',
    description:
      'Automated cold email generation tool powered by AI. Analyzes target profiles and generates personalized, compelling outreach emails at scale, significantly boosting response rates.',
    tags: ['CrewAI', 'LangChain', 'OpenAI', 'Automation', 'Python'],
    type: 'Automation',
    featured: true,
    color: '#7c3aed',
  },
  {
    Icon: Bot,
    title: 'Custom AI Chatbots',
    description:
      'Built various domain-specific chatbots for businesses, including customer support bots, FAQ bots, and conversational AI assistants with memory and context handling.',
    tags: ['LangChain', 'Chatbot', 'NLP', 'Python', 'API Integration'],
    type: 'Chatbot',
    featured: true,
    color: '#00f0ff',
  },
];

const otherProjects = [
  'AI Workflow Automation Pipeline',
  'Multi-Agent Research System',
  'Document Processing Bot',
  'Business Process Automation',
  'AI Content Generator',
  'Intelligent Data Extractor',
  'Automated Reporting System',
  'AI Lead Qualifier',
  'Knowledge Base AI Assistant',
  'Automated Scheduling Bot',
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(0,240,255,0.06), transparent 60%)',
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
              Portfolio
            </span>
            <div className="section-line" />
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-700" style={{ color: '#ffffff' }}>
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-inter text-sm mt-4" style={{ color: '#a1a1aa' }}>
            20+ projects completed — here are the highlights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projects.map(({ Icon, title, description, tags, type, color }) => (
            <div
              key={title}
              className="card-hover rounded-xl p-6 flex flex-col gap-5 group"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <span
                  className="font-orbitron text-xs px-3 py-1 rounded-full"
                  style={{
                    color,
                    background: `${color}10`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  {type}
                </span>
              </div>

              <div>
                <h3
                  className="font-orbitron text-base font-600 mb-3"
                  style={{ color: '#ffffff' }}
                >
                  {title}
                </h3>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <span
                  className="font-inter text-xs flex items-center gap-1.5 transition-all"
                  style={{ color: '#a1a1aa' }}
                >
                  <Github size={13} />
                  Source
                </span>
                <span
                  className="font-inter text-xs flex items-center gap-1.5 ml-auto"
                  style={{ color }}
                >
                  <ExternalLink size={13} />
                  Live Demo
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-8"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <h3
            className="font-orbitron text-sm tracking-widest mb-6 uppercase"
            style={{ color: '#7c3aed' }}
          >
            Other Projects (10+)
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherProjects.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 font-inter text-xs py-2"
                style={{ color: '#a1a1aa' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#00f0ff' }}
                />
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
