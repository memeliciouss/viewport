'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function StartMenu() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const menuItems = [
    { icon: '/icons/thispc.ico', text: 'Project' },
    { icon: '/icons/resume.ico', text: 'Resume' },
    { icon: '/icons/github.png', text: 'Github' },
    { icon: '/icons/linked.ico', text: 'Linked' },
    { icon: '/icons/settings.ico', text: 'Settings' },
    { icon: '/icons/run.ico', text: 'Run...' },
    { icon: '/icons/shutdown.ico', text: 'Shut down...' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '41px',
      left: '4px',
      width: '250px', // width of start menu
      backgroundColor: '#C0C0C0',
      borderTop: '2px solid #FFFFFF',
      borderLeft: '2px solid #FFFFFF',
      borderBottom: '2px solid #404040',
      borderRight: '2px solid #404040',
      boxShadow: '1px 1px 0px #000',
      display: 'flex',
      zIndex: 1000,
    }}>
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
        height: '250', // height of start menu
      }}>
        <div style={{
          fontFamily: ' Segoe UI',
          fontSize: '28px',
          fontWeight: 'bold',
          lineHeight: '8px',
          color: '#BCBFBD', 
          padding: '8px 10px'
        }}>
          viewport
        </div>
        <div style={{
          fontFamily: ' Segoe UI',
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
        {menuItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 12px',
              fontSize: '14px',
              cursor: 'default',
              backgroundColor: hoveredItem === index ? '#000080' : 'transparent',
              color: hoveredItem === index ? 'white' : 'black',
              gap: '12px'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              height: 'auto'
            }}>
              <Image
                src={item.icon}
                alt=""
                width={28}
                height={0} 
                draggable={false}
                style={{
                  width: 'auto',
                  height: '28px', 
                  objectFit: 'contain',
                  marginRight: '12px'
                }}
              />
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}