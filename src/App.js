import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectSection from './sections/ProjectSection';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '0 1.25rem 3rem' }}>
        <HeroSection />
        <ProjectSection />
      </main>
      <footer id="contact" style={{ background: '#0f172a', color: '#fff', padding: '2rem 1.25rem', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '1rem' }}>Let's build something amazing together.</p>
        <p style={{ margin: '0.75rem 0 0' }}>
          <a href="mailto:thannsoryalyza@example.com" style={{ color: '#93c5fd' }}>thannsoryalyza@example.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;