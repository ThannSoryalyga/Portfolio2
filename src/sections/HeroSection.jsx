import React from 'react';
import { skillsData } from '../data/skills';

export default function HeroSection() {
  return (
    <section id="about" style={{ padding: '4rem 0 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '2rem', alignItems: 'center' }}>
        <div>
          <p style={{ letterSpacing: '0.12rem', textTransform: 'uppercase', color: '#2563eb', fontWeight: 700, marginBottom: '0.75rem' }}>
            Frontend Developer
          </p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', margin: '0 0 1rem', lineHeight: 1.1, color: '#0f172a' }}>
            Hi, I'm THANN Soryalyza.
          </h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '620px', color: '#334155', lineHeight: 1.7 }}>
            I build clean, responsive web interfaces with a focus on performance, usability, and meaningful user experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ background: '#2563eb', color: '#fff', padding: '0.8rem 1.2rem', borderRadius: '999px', fontWeight: 600 }}>
              View Projects
            </a>
            <a href="#contact" style={{ background: '#e2e8f0', color: '#0f172a', padding: '0.8rem 1.2rem', borderRadius: '999px', fontWeight: 600 }}>
              Contact Me
            </a>
          </div>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #dbeafe', borderRadius: '20px', padding: '1.5rem', boxShadow: '0 24px 48px rgba(15, 23, 42, 0.08)' }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08rem', color: '#64748b', marginBottom: '0.75rem' }}>
            Quick profile
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827' }}>3+</div>
          <p style={{ color: '#475569', lineHeight: 1.6 }}>
            Years crafting interfaces and delivering user-focused digital experiences.
          </p>
        </div>
      </div>

      <div id="skills" style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '0.9rem', color: '#0f172a' }}>Skills</h3>
        <ul style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0 }}>
          {skillsData.map((skill, index) => (
            <li key={index} style={{ background: '#dbeafe', color: '#1d4ed8', padding: '0.5rem 0.9rem', borderRadius: '999px', fontWeight: 600 }}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}