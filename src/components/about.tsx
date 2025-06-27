'use client';
import React, { useState, useEffect } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'tech' | 'connect'>('about');
  const [asciiArt, setAsciiArt] = useState('');

  useEffect(() => {
    // Fetch ASCII art from public directory
    fetch('/ascii-art.txt')
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
              <h5 className="font-bold text-lg mb-2">Tech Stack</h5>
              <div className="h-[1px] w-1/2 bg-gray-400/40 mb-3" />
              <div className="bg-[#c0c0c0] p-3 font-mono text-[14px] leading-relaxed border border-black">
                <div>Languages: Python, C++, Java, HTML</div>
                <div>Web Dev: Next.js, Bootstrap, Tailwind CSS, Django, Flask, Django REST Framework</div>
                <div>Databases: MySQL, PostgreSQL, SQLite</div>
                <div>Data & Analytics: Pandas, NumPy, Advanced Excel</div>
                <div>Robotics & Hardware: ROS2, Arduino, Arduino IDE, IoT, PlatformIO</div>
                <div>DevOps & Tools: Git, GitHub, Docker, Linux</div>
                <div>Eng. Design: Fusion360, AutoCAD</div>
                <div>Design Tools: Figma, Canva, GIMP</div>
              </div>
            </div>
          )}

          {/* Connect Tab */}
          {activeTab === 'connect' && (
            <div className="tab-pane show active" role="tabpanel">
              <p className="mb-3">
                Feel free to connect via GitHub or email. This component is open-source and welcomes contributions!
              </p>
              <button className="btn btn-sm btn-secondary border-dark">Contact Me</button>
            </div>
          )}
        </div>
      </div>

      {/* Right: ASCII Art (1/3) - MODIFIED */}
      <div className="w-1/3 flex flex-col p-2 bg-[#1e1e1e] text-white font-mono text-sm ml-[-7px] mt-[38px]">
        <div className="flex-1 flex items-center justify-center">
          <pre className="leading-tight whitespace-pre-wrap">
            {asciiArt || 'Loading ASCII art...'}
          </pre>
        </div>
      </div>
    </div>
  );
}