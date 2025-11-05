import React from 'react';
import { Gamepad2, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Gamepad2,
    title: 'Gaming vibes',
    desc: 'A playful, character-filled 3D scene greets you.',
  },
  {
    icon: Sparkles,
    title: 'Smooth animations',
    desc: 'Micro-interactions that feel delightful to use.',
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Best practices and modern UI patterns baked in.',
  },
];

const FeatureBadges = () => {
  return (
    <div className="mx-auto -mt-10 grid max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-white shadow-lg backdrop-blur"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <f.icon className="h-5 w-5 text-pink-300" />
          </div>
          <div>
            <div className="font-semibold">{f.title}</div>
            <div className="text-sm text-white/70">{f.desc}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureBadges;
