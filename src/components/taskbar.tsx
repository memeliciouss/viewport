'use client';
import { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';
import Taskapp from './taskapp';


const startMenuApps=[{
  title:'Github', mount:<p>Github</p>,
},{
  title:'Customize', mount:<p>Customize</p>
},{
  title:'ThisPC', mount:<p>This PC</p>
}]
export default function Taskbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      const menuEl = menuRef.current as HTMLElement | null;
      const buttonEl = buttonRef.current as HTMLElement | null;

      if (
        menuEl &&
        !menuEl.contains(target) &&
        buttonEl &&
        !buttonEl.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          height: '41px',
          width: '100%',
          backgroundColor: '#B2B3B2',
          display: 'flex',
          alignItems: 'center',
          padding: '0 2px',
          zIndex: 1,
          borderTop: '2px solid white',
          borderBottom: '2px solid gray',
        }}
      >
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-primary d-flex align-items-center justify-content-center"
          style={{
            width: '114px', // start button space on taskbar
            height: '41px',
            padding: '0 6px',
            fontFamily: '"windows", sans-serif',
            fontSize: '18px',
          }}
        >
          <NextImage
            src="/icons/spacepc.ico"
            alt="Start"
            width={20}
            height={16}
            style={{ marginRight: '6px' }}
          />
          Start
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            bottom: '41px',
            left: '2px',
            width: '200px',
            backgroundColor: '#C0C0C0',
            border: '2px solid black',
            padding: '6px',
            zIndex: 1001,
            fontFamily: '"windows", sans-serif',
            boxShadow: 'inset 2px 2px #fff, inset -2px -2px #808080',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          {startMenuApps.map(({ title, mount }) =>
          <Taskapp title={title} mount={mount}/>
          )}
        </div>
      )}
    </>
  );
}
