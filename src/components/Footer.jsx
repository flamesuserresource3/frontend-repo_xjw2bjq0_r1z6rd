import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/60 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Arcade Login. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="text-white/70 hover:text-white">Privacy</a>
          <a href="#" className="text-white/70 hover:text-white">Terms</a>
          <a href="#" className="text-white/70 hover:text-white">Support</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
