import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Eye, EyeOff, Lock } from 'lucide-react';

const InputField = ({ icon: Icon, type = 'text', label, value, onChange, placeholder }) => (
  <label className="group relative block">
    <span className="mb-2 block text-sm font-medium text-white/80">{label}</span>
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
        <Icon className="h-5 w-5" />
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-white placeholder:text-white/40 outline-none transition focus:border-pink-400/60 focus:bg-white/10 focus:ring-2 focus:ring-pink-300/40"
      />
    </div>
  </label>
);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Tiny client-side validation for demo purposes
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Simulated success
    alert('Signed in! (This is a front-end demo)');
  };

  return (
    <section id="login" className="relative z-10 mx-auto -mt-16 w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-white shadow-2xl backdrop-blur md:p-8">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/90 shadow-lg shadow-pink-500/30">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Sign in to continue</h2>
          <p className="text-sm text-white/70">Enter your details to access your player hub</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            icon={User}
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@arcade.gg"
          />

          <label className="group relative block">
            <span className="mb-2 block text-sm font-medium text-white/80">Password</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
                <Lock className="h-5 w-5" />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-10 text-white placeholder:text-white/40 outline-none transition focus:border-pink-400/60 focus:bg-white/10 focus:ring-2 focus:ring-pink-300/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/10 text-pink-500 focus:ring-pink-400" />
              <span className="text-white/80">Remember me</span>
            </label>
            <button type="button" className="text-pink-300 hover:text-pink-200">Forgot password?</button>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -1 }}
            type="submit"
            className="mt-2 w-full rounded-xl bg-pink-500 px-4 py-3 font-semibold text-white shadow-pink-500/30 transition hover:bg-pink-400 hover:shadow-xl hover:shadow-pink-500/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Sign in
          </motion.button>
        </form>

        <p className="mt-4 text-center text-sm text-white/70">
          New here? <a href="#" className="font-semibold text-pink-300 hover:text-pink-200">Create an account</a>
        </p>
      </motion.div>
    </section>
  );
};

export default LoginForm;
