'use client';
import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'connect'>('about');

  return (
    <div className="w-full h-full min-h-full bg-[#2C2C2C] flex">
  <div className="flex w-full h-full flex-grow">
    {/* Left: Tabs + Content (2/3) */}
    <div className="w-2/3 h-full flex flex-col bg-gray-100 dark:bg-[#2c2c2c] text-black dark:text-white p-2">
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
            <p className="mb-3">
              This project mimics a classic Windows interface using modern tech. It's a lightweight, retro-style UI with a nostalgic feel, built in React and Tailwind.
            </p>
            <button className="btn btn-sm btn-primary border-dark">
              Show More
            </button>
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
    <div className="w-1/3 h-full bg-[#1e1e1e] text-white p-2 font-mono text-sm flex items-center justify-center">
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
