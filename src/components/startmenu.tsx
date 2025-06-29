'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface AppConfig {
  title: string;
  icon?: string;
  external?: boolean;
  url?: string;
}

export default function StartMenu({ onOpen }: { onOpen: (title: string) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [apps, setApps] = useState<AppConfig[]>([]);

  const startMenuApps = ['Github', 'Resume','Source Code'];
  // define apps the sit on start menu

  useEffect(() => {
    fetch('/data/apps.json')
      .then(res => res.json())
      .then((data: AppConfig[]) => {
        const filtered = data.filter(app => startMenuApps.includes(app.title));
        setApps(filtered);
      });
  }, []);

  const handleClick = (app: AppConfig) => {
  if (app.external === true && app.url) {
    window.open(app.url, '_blank');
  } else {
    onOpen(app.title); 
  }
};


  return (
    <div style={{
      position: 'fixed',
      bottom: '41px',
      left: '4px',
      width: '250px',
      backgroundColor: '#C0C0C0',
      borderTop: '2px solid #FFFFFF',
      borderLeft: '2px solid #FFFFFF',
      borderBottom: '2px solid #404040',
      borderRight: '2px solid #404040',
      boxShadow: '1px 1px 0px #000',
      display: 'flex',
      zIndex: 1000,
    }}>
      {/* Vertical side label */}
      <div style={{
        width: '32px',
        backgroundColor: '#7B7D7B',
        padding: '4px 0',
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        textAlign: 'right',
        whiteSpace: 'pre',
        display: 'flex',
        alignItems: 'flex-start',
        height: '300px',
      }}>
        <div style={{
          fontFamily: 'Segoe UI',
          fontSize: '28px',
          fontWeight: 'bold',
          lineHeight: '8px',
          color: '#BCBFBD',
          padding: '8px 10px'
        }}>
          viewport
        </div>
        <div style={{
          fontFamily: 'Segoe UI',
          fontSize: '20px',
          lineHeight: '8px',
          color: '#BCBFBD',
          padding: '0px 12px'
        }}>
          /memelicious
        </div>
      </div>

      {/* Menu Items */}
      <div style={{ padding: '6px 0', flex: 1 }}>
        {apps.map((app, index) => (
          <div
            key={app.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(app)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 12px',
              fontSize: '14px',
              cursor: 'default',
              backgroundColor: hoveredIndex === index ? '#000080' : 'transparent',
              color: hoveredIndex === index ? 'white' : 'black',
              gap: '12px'
            }}
          >
            <Image
              src={`/icons/${app.icon}`}
              alt=""
              width={28}
              height={28}
              draggable={false}
              style={{
                objectFit: 'contain',
                marginRight: '12px'
              }}
            />
            <span>{app.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
