'use client';
import Draggable from 'react-draggable';
import { useEffect, useRef, useState, useCallback } from 'react';

interface DeskappProps {
  title: string;
  onOpen: (title: string) => void;
}

interface AppConfig {
  title: string;
  icon?: string;
}

export default function Deskapp({ title, onOpen }: DeskappProps) {
  const nodeRef = useRef(null);
  const [config, setConfig] = useState<AppConfig | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    fetch('/data/apps.json')
      .then(res => res.json())
      .then((data: AppConfig[]) => {
        const app = data.find(app => app.title === title);
        if (app) setConfig(app);
      });
  }, [title]);

  const eventHandler = useCallback(
    (cb: (event: Event) => void) => {
      return (event: any) => {
        if (isMobile && event.type === 'touchstart') {
          cb(event); // mobile = tap
        }
      };
    },
    [isMobile]
  );

  return (
    <Draggable grid={[46, 45]} bounds="parent" nodeRef={nodeRef}>
      <div
        tabIndex={0}
        ref={nodeRef}
        className="deskIcon"
        style={{
          width: '80px',
          height: '78px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'var(--cursor-arrow)',
          userSelect: 'none',
          padding: '5px',
        }}
        onDoubleClick={!isMobile ? () => onOpen(title) : undefined}  // desktop: double click
        onTouchStart={eventHandler(() => onOpen(title))}             // mobile: single tap
      >
        {config && (
          <div className="desktop-icon" tabIndex={0}>
            <img
              src={`/icons/${config.icon}`}
              style={{ width: '40px', height: 'auto' }}
              draggable={false}
              alt={title}
            />
            <p
              className="icon-label"
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: '0.25rem',
              }}
            >
              {title}
            </p>
          </div>
        )}
      </div>
    </Draggable>
  );
}
