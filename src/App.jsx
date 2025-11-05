import React from 'react';
import Hero from './components/Hero';
import FeatureBadges from './components/FeatureBadges';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

function App() {
  const handleGetStarted = () => {
    const el = document.getElementById('login');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onGetStarted={handleGetStarted} />
      <main className="relative z-10">
        <FeatureBadges />
        <div className="mx-auto mt-10 max-w-6xl px-6">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
