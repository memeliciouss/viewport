'use client';
import React, { useState, useEffect } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'tech' | 'connect'>('about');
  const [asciiArt, setAsciiArt] = useState('');

  useEffect(() => {
    // Fetch ASCII art from public directory
    fetch('/ascii.txt')
      .then(response => response.text())
      .then(text => setAsciiArt(text))
      .catch(error => console.error('Error loading ASCII art:', error));
  }, []);

  return (
    <div className="w-full h-full bg-[#2C2C2C] flex">
      {/* Left: Tabs + Content (2/3) - UNCHANGED */}
      <div className="w-2/3 flex flex-col bg-gray-100 dark:bg-[#2c2c2c] text-black dark:text-white p-2">
        {/* Tabs */}
        <ul className="nav nav-tabs" role="tablist">
          {['about', 'tech', 'connect'].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab as 'about' | 'tech' | 'connect')}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab === 'about' ? 'About' : tab === 'tech' ? 'Tech Stack' : 'Connect'}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Panels - UNCHANGED */}
        <div className="tab-content flex-1 pt-3">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="tab-pane show active" role="tabpanel">
              <span className="block text-[24px] font-bold">Rakshit Raj</span>
              <div className="h-[1px] w-1/2 bg-gray-400/40 my-2" />

              <p className="mb-3 leading-relaxed">
                <span className="block text-[14px]">Pre-final year engineering undergrad</span>
                <span className="block text-[14px]">Curious mind for software, computers, and robotics.</span>
                <span className="block text-[14px]">I enjoy building things that click, compute, or come to life.</span>
                <span className="block text-[14px]">Outside tech, I'm drawn to movies, music, sketching, games, space, and the occasional chess match.</span>
              </p>
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech' && (
            <div className="tab-pane show active" role="tabpanel">
              <span className="block text-[24px]">Tech Stack</span>

              <div className="h-[1px] w-1/2 bg-gray-400/40 mb-3" />
              <div className="bg-[#c0c0c0] p-3 font-mono text-[14px] leading-relaxed border border-black space-y-2">
                <div><span className="font-bold">Languages:</span> Python, C++, Java, HTML</div>
                <div><span className="font-bold">Web Dev:</span> Next.js, Bootstrap, Tailwind CSS, Django, Flask, Django REST Framework</div>
                <div><span className="font-bold">Databases:</span> MySQL, PostgreSQL, SQLite</div>
                <div><span className="font-bold">Data & Analytics:</span> Pandas, NumPy, Advanced Excel</div>
                <div><span className="font-bold">Robotics & Hardware:</span> ROS2, Arduino, Arduino IDE, IoT, PlatformIO</div>
                <div><span className="font-bold">DevOps & Tools:</span> Git, GitHub, Docker, Linux</div>
                <div><span className="font-bold">Eng. Design:</span> Fusion360, AutoCAD</div>
                <div><span className="font-bold">Design Tools:</span> Figma, Canva, GIMP</div>
              </div>

            </div>
          )}

          {/* Connect Tab */}
          {activeTab === 'connect' && (
            <div className="flex flex-col gap-2">
              <span className="block text-[24px]">Let's Connect</span>

              <div className="h-[1px] w-1/2 bg-gray-400/40 mb-3" />
              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary d-flex align-items-center justify-content-start"
                style={{
                  width: '160px',
                  height: '38px',
                  padding: '0 6px',
                  fontFamily: '"windows", sans-serif',
                  fontSize: '14px',
                  cursor: 'var(--cursor-arrow)',
                  gap: '6px',
                  textDecoration: 'none',
                }}
              >
                <img
                  src="/icons/github.ico"
                  alt="GitHub"
                  width={18}
                  height={18}
                  style={{ pointerEvents: 'none' }}
                />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary d-flex align-items-center justify-content-start"
                style={{
                  width: '160px',
                  height: '38px',
                  padding: '0 6px',
                  fontFamily: '"windows", sans-serif',
                  fontSize: '14px',
                  cursor: 'var(--cursor-arrow)',
                  gap: '6px',
                  textDecoration: 'none',
                }}
              >
                <img
                  src="/icons/linkedin.ico"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  style={{ pointerEvents: 'none' }}
                />
                LinkedIn
              </a>

              {/* Letterboxd */}
              <a
                href="https://letterboxd.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary d-flex align-items-center justify-content-start"
                style={{
                  width: '160px',
                  height: '38px',
                  padding: '0 6px',
                  fontFamily: '"windows", sans-serif',
                  fontSize: '14px',
                  cursor: 'var(--cursor-arrow)',
                  gap: '6px',
                  textDecoration: 'none',
                }}
              >
                <img
                  src="/icons/letterboxd.ico"
                  alt="Letterboxd"
                  width={18}
                  height={18}
                  style={{ pointerEvents: 'none' }}
                />
                Letterboxd
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/user/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary d-flex align-items-center justify-content-start"
                style={{
                  width: '160px',
                  height: '38px',
                  padding: '0 6px',
                  fontFamily: '"windows", sans-serif',
                  fontSize: '14px',
                  cursor: 'var(--cursor-arrow)',
                  gap: '6px',
                  textDecoration: 'none',
                }}
              >
                <img
                  src="/icons/spotify.ico"
                  alt="Spotify"
                  width={18}
                  height={18}
                  style={{ pointerEvents: 'none' }}
                />
                Spotify
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right: ASCII Art (1/3) - MODIFIED */}
      <div
        className="w-1/3 p-2 bg-[#1e1e1e] text-white font-mono text-sm ml-[-7px]"
        style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <pre className="leading-tight whitespace-pre-wrap m-0 text-center">
          {asciiArt || 'Loading ASCII art...'}
        </pre>
      </div>

    </div>
  );
}