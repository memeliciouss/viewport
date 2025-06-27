'use client';
import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'connect'>('about');

  return (
    <div className="w-full h-full bg-[#2C2C2C] flex">
      {/* Left: Tabs + Content (2/3) */}
      <div className="w-2/3 flex flex-col bg-gray-100 dark:bg-[#2c2c2c] text-black dark:text-white p-2">
        {/* Tabs */}
        <ul className="nav nav-tabs" role="tablist">
          {['about', 'connect'].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab as 'about' | 'connect')}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab === 'about' ? 'About' : 'Connect'}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="tab-content flex-1">
          {activeTab === 'about' && (
            <div className="tab-pane show active" role="tabpanel">
              <span className="block text-[24px] font-bold">Rakshit Raj</span><hr />
              <p className="mb-3 leading-relaxed">
                <span className="block text-[14px] ">Pre-final year engineering undergrad</span>
                <span className="block text-[14px]">Curious mind for software, computers, and robotics.</span>
                <span className="block text-[14px]">I enjoy building things that click, compute, or come to life.</span>
              </p>


              <div className="tab-pane show active" role="tabpanel">
                <h5 className="font-bold text-lg mb-3">Skills</h5><hr />

                <div className="bg-[#c0c0c0] p-3 font-mono text-[14px] leading-relaxed border border-black">
                  <div>Languages: C++, Python, Java</div>
                  <div>Web Dev: Next.js, Django, Flask</div>
                  <div>Databases: MySQL, SQLite, PostgreSQL</div>
                  <div>Robotics: Arduino, ROS2, PlatformIO</div>
                  <div>Tools & DevOps: Git, Docker, Linux</div>
                  <div>Design: Figma, GIMP, Aseprite</div>
                </div>
              </div>


            </div>

          )}
          {activeTab === 'connect' && (
            <div className="tab-pane show active" role="tabpanel">
              <p className="mb-3">
                Feel free to connect via GitHub or email. This component is open-source and welcomes contributions!
              </p>
              <button className="btn btn-sm btn-secondary border-dark">
                Contact Me
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right: ASCII Art (1/3) */}
      <div className="w-1/3 flex flex-col p-2 bg-[#1e1e1e] text-white font-mono text-sm" style={{ marginLeft: "-7px", marginTop: "38px" }}>
        <div className="flex-1 flex items-center justify-center">
          <pre className="leading-tight whitespace-pre-wrap">
            {String.raw`
   ____        _         
  / __ \__  __(_)___ ___ 
 / / / / / / / / __ '__ \\
/ /_/ / /_/ / / / / / / / 
\___\_\__,_/_/_/ /_/ /_/  
`}
          </pre>
        </div>
      </div>
    </div>

  );
}
