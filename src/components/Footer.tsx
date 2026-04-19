import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: 'rgba(0,240,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Zap size={16} style={{ color: '#00f0ff' }} />
          <span className="font-orbitron text-xs tracking-widest" style={{ color: '#00f0ff' }}>
            RABIANOOR
          </span>
        </div>

        <p className="font-inter text-xs text-center" style={{ color: '#a1a1aa' }}>
          AI Agent Developer & Automation Expert — Building the future, one automation at a time.
        </p>

        <p className="font-inter text-xs" style={{ color: '#a1a1aa' }}>
          &copy; {new Date().getFullYear()} Rabianoor
        </p>
      </div>
    </footer>
  );
}
