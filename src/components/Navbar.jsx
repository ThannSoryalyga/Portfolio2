import React from 'react';

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        color: '#fff',
        backdropFilter: 'blur(6px)'
      }}
    >
      <h2 style={{ margin: 0, fontSize: '1.35rem' }}>THANN Soryalyza</h2>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#about" style={{ color: '#fff' }}>About</a></li>
        <li><a href="#projects" style={{ color: '#fff' }}>Projects</a></li>
        <li><a href="#skills" style={{ color: '#fff' }}>Skills</a></li>
        <li><a href="#contact" style={{ color: '#fff' }}>Contact</a></li>
      </ul>
    </nav>
  );
}