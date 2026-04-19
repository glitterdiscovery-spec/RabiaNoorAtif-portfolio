import { useState } from 'react';
import { Send, MessageSquare, Linkedin, Github, Twitter } from 'lucide-react';

const socials = [
  { Icon: Linkedin, label: 'LinkedIn', href: '#', color: '#00f0ff' },
  { Icon: Github, label: 'GitHub', href: '#', color: '#7c3aed' },
  { Icon: Twitter, label: 'Twitter/X', href: '#', color: '#00f0ff' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,240,255,0.06), transparent 60%)',
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
              Get In Touch
            </span>
            <div className="section-line" />
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-700 mb-4" style={{ color: '#ffffff' }}>
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="font-inter text-sm max-w-xl" style={{ color: '#a1a1aa' }}>
            Ready to integrate AI into your business or automate your workflows? Let's talk about
            how I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <div
              className="rounded-xl p-7 mb-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(0,240,255,0.15)',
              }}
            >
              <MessageSquare size={24} className="mb-4" style={{ color: '#00f0ff' }} />
              <h3 className="font-orbitron text-sm font-600 mb-3" style={{ color: '#ffffff' }}>
                Available For
              </h3>
              <ul className="space-y-3">
                {[
                  'AI Agent Development',
                  'Business Automation Projects',
                  'Chatbot Development',
                  'Consulting & Strategy',
                  'LangChain / CrewAI Projects',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-inter text-sm"
                    style={{ color: '#a1a1aa' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#00f0ff' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="font-orbitron text-xs tracking-widest mb-4 uppercase"
                style={{ color: '#7c3aed' }}
              >
                Connect Online
              </p>
              <div className="flex gap-4">
                {socials.map(({ Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}25`,
                    }}
                    aria-label={label}
                  >
                    <Icon size={18} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div
                className="rounded-xl p-10 flex flex-col items-center justify-center text-center"
                style={{
                  background: 'rgba(0,240,255,0.04)',
                  border: '1px solid rgba(0,240,255,0.3)',
                  minHeight: '340px',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid #00f0ff40' }}
                >
                  <Send size={28} style={{ color: '#00f0ff' }} />
                </div>
                <h3 className="font-orbitron text-lg font-700 mb-3" style={{ color: '#00f0ff' }}>
                  Message Sent!
                </h3>
                <p className="font-inter text-sm" style={{ color: '#a1a1aa' }}>
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 btn-cyan font-orbitron text-xs tracking-widest px-6 py-2.5 rounded"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl p-7 flex flex-col gap-5"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(0,240,255,0.15)',
                }}
              >
                {[
                  { key: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { key: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Inquiry' },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label
                      className="font-orbitron text-xs tracking-widest mb-2 block"
                      style={{ color: '#a1a1aa' }}
                    >
                      {label.toUpperCase()}
                    </label>
                    <input
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      required
                      className="w-full px-4 py-3 rounded-lg font-inter text-sm outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#ffffff',
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = 'rgba(0,240,255,0.5)';
                        (e.target as HTMLInputElement).style.boxShadow = '0 0 15px rgba(0,240,255,0.1)';
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)';
                        (e.target as HTMLInputElement).style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    className="font-orbitron text-xs tracking-widest mb-2 block"
                    style={{ color: '#a1a1aa' }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 rounded-lg font-inter text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#ffffff',
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,240,255,0.5)';
                      (e.target as HTMLTextAreaElement).style.boxShadow = '0 0 15px rgba(0,240,255,0.1)';
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.1)';
                      (e.target as HTMLTextAreaElement).style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-purple font-orbitron text-xs tracking-widest px-7 py-3.5 rounded flex items-center justify-center gap-3 mt-1"
                >
                  {loading ? (
                    <>
                      <div
                        className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: 'rgba(255,255,255,0.5)', borderTopColor: 'transparent' }}
                      />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
