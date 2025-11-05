import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* 3D Spline Scene as full-width cover */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay for readability - does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 shadow-lg backdrop-blur">
            <Rocket className="h-4 w-4 text-pink-300" />
            <span className="text-sm font-medium text-white/90">Playful 3D login experience</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Welcome to Arcade Login
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 md:text-lg">
            Jump into a cartoonish, interactive world. Sign in to unlock your player profile,
            achievements, and more.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={onGetStarted}
              className="group rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-pink-500/30 transition hover:translate-y-[-1px] hover:bg-pink-400 hover:shadow-xl hover:shadow-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Get Started
            </button>
            <a
              href="#login"
              className="rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              I already have an account
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
