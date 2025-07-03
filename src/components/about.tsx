'use client';
import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'tech' | 'connect'>('about');

  return (
    <div className="page-container" style={{width:'100%',height:'100%'}}>
      <div className="content-section">
        <div style={{ display: 'flex', width: '100%' }}>
          {/* Main Content Area */}
          <div style={{ flex: 1 }}>
            {/* Tabs */}
            <div className="tab-shell">
              <div className="tab-bar">
                {['about', 'tech', 'connect'].map((tab) => (
                  <div
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab as 'about' | 'tech' | 'connect')}
                  >
                    {tab === 'about' ? 'About' :
                      tab === 'tech' ? 'Tech Stack' :
                        'Connect'}
                  </div>
                ))}
              </div>
              <div className="tab-panel"></div>
            </div>

            {/* Tab Panels */}
            <div className="tab-content-container">
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="tab-panel-content" style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  {/* Text Section */}
                  <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
                    <span className="title" style={{ fontSize: '24px', fontWeight: '600' }}>Rakshit Raj</span>
                    <div className="divider" />
                    <div className="paragraph" style={{ fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <p className="text-line">Pre-final year engineering undergrad</p>
                      <p className="text-line">Curious mind for software, computers, and robotics.</p>
                      <p className="text-line">I enjoy building things that click, compute, or come to life.</p>
                      <p className="text-line">Outside tech, I'm drawn to movies, music, sketching, games, space, and the occasional chess match.</p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src="/data/dither.png"
                      alt="Decorative pattern"
                      draggable={false}
                      style={{
                        width: '10rem',
                        height: 'auto',
                        objectFit: 'contain',
                        userSelect: 'none',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Tech Stack Tab */}
              {activeTab === 'tech' && (
                <div className="tab-panel-content">
                  <span className="title" style={{ fontSize: '20px', fontWeight: '500' }}>Tech Stack</span>
                  <div className="divider" />
                  <div className="tech-stack-box" style={{ fontFamily: 'sans-serif', gap: '2px' }}>
                    <div><span style={{ fontWeight: 600 }}>Languages:</span> Python, C++, Java, HTML</div>
                    <div><span style={{ fontWeight: 600 }}>Web Dev:</span> Next.js, Bootstrap, Tailwind CSS, Django, Flask, Django REST Framework</div>
                    <div><span style={{ fontWeight: 600 }}>Databases:</span> MySQL, PostgreSQL, SQLite</div>
                    <div><span style={{ fontWeight: 600 }}>Data & Analytics:</span> Pandas, NumPy, Advanced Excel</div>
                    <div><span style={{ fontWeight: 600 }}>Robotics & Hardware:</span> ROS2, Arduino, Arduino IDE, IoT, PlatformIO</div>
                    <div><span style={{ fontWeight: 600 }}>DevOps & Tools:</span> Git, GitHub, Docker, Linux</div>
                    <div><span style={{ fontWeight: 600 }}>Eng. Design:</span> Fusion360, AutoCAD</div>
                    <div><span style={{ fontWeight: 600 }}>Design Tools:</span> Figma, Canva, GIMP</div>
                  </div>
                </div>
              )}

              {/* Connect Tab */}
              {activeTab === 'connect' && (
                <div className="connect-container">
                  <span className="title" style={{ fontSize: '20px', fontWeight: '500' }}>Let's Connect</span>
                  <div className="divider" />
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-button">
                    <img src="/icons/github.ico" alt="GitHub" width={18} height={18} className="button-icon" />
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button">
                    <img src="/icons/linkedin.ico" alt="LinkedIn" width={18} height={18} className="button-icon" />
                    LinkedIn
                  </a>
                  <a href="https://letterboxd.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button">
                    <img src="/icons/letterboxd.ico" alt="Letterboxd" width={18} height={18} className="button-icon" />
                    Letterboxd
                  </a>
                  <a href="https://open.spotify.com/user/yourusername" target="_blank" rel="noopener noreferrer" className="social-button">
                    <img src="/icons/spotify.ico" alt="Spotify" width={18} height={18} className="button-icon" />
                    Spotify
                  </a>
                </div>
              )}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}