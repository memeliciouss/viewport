'use client';
import { Stardos_Stencil } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import StartMenu from './startmenu';

export default function Taskbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking anywhere except the button
  useEffect(() => {
    if (!menuOpen) return;
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isStartButton = target.closest('button[onClick]');
      if (!isStartButton) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  // Clock functionality (your existing code)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const date = `${day}/${month}/${year}`;

      const timeElem = document.getElementById('clock-time');
      const dateElem = document.getElementById('clock-date');
      if (timeElem && dateElem) {
        timeElem.textContent = time;
        dateElem.textContent = date;
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {menuOpen && (
        <StartMenu/>
      )}

      {/* Your existing Taskbar markup */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100vw',
          height: '41px',
          backgroundColor: '#B2B2B3',
          borderTop: '2px solid #ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '0 3px',
          zIndex: 1,
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(prev => !prev);
          }}
          className="btn btn-primary d-flex align-items-center justify-content-center"
          style={{
            width: '114px',
            height: '41px',
            padding: '0 4px',
            fontFamily: '"windows", sans-serif',
            fontSize: '16px',
            cursor: 'var(--cursor-arrow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: menuOpen ? '#C0C0C0' : '#B2B2B3',
            borderTop: menuOpen ? '2px solid #404040' : '2px solid #FFFFFF',
            borderLeft: menuOpen ? '2px solid #404040' : '2px solid #FFFFFF',
            borderBottom: menuOpen ? '2px solid #FFFFFF' : '2px solid #404040',
            borderRight: menuOpen ? '2px solid #FFFFFF' : '2px solid #404040',
          }}
        >
          <Image
            draggable={false}
            src="/icons/spacepc.ico"
            alt="Start"
            width={20}
            height={20}
            style={{ marginRight: '4px' }}
          />
          Start
        </button>

        <div
          style={{
            width: '2px',
            height: '80%',
            backgroundColor: '#6B6B6B',
            margin: '0 3px',
          }}
        />

        <div style={{ flexGrow: 1 }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '114px',
            height: '37px',
            padding: '2px 6px 0px 6px',
            fontFamily: '"windows", sans-serif',
            fontSize: '13px',
            color: 'black',
            backgroundColor: '#C3C3C3',
            borderTop: '2px solid #6B6B6B',
            borderLeft: '2px solid #6B6B6B',
            borderBottom: '2px solid #FFFFFF',
            borderRight: '2px solid #FFFFFF',
            boxSizing: 'border-box',
            lineHeight: '1.1',
            textAlign: 'right',
            marginRight: '3px',
          }}
        >
          <span id="clock-time">--:--</span>
          <span id="clock-date">--/--</span>
        </div>
      </div>
    </>
  );
}