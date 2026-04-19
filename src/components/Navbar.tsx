import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Zap size={20} className="text-cyan" style={{ color: '#00f0ff' }} />
          <span
            className="font-orbitron text-sm font-700 tracking-widest"
            style={{ color: '#00f0ff' }}
          >
            RABIANOOR
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-inter text-sm tracking-wide transition-colors duration-200"
                style={{ color: '#a1a1aa' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = '#00f0ff')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = '#a1a1aa')
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-cyan font-orbitron text-xs tracking-widest px-5 py-2 rounded"
        >
          HIRE ME
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: '#00f0ff' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden navbar-glass px-6 pb-6 pt-2 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-inter text-sm tracking-wide"
              style={{ color: '#a1a1aa' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-cyan font-orbitron text-xs tracking-widest px-5 py-2 rounded text-center mt-2"
          >
            HIRE ME
          </a>
        </div>
      )}
    </nav>
  );
}
