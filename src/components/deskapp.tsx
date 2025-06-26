'use client';
import Draggable from 'react-draggable';
import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    fetch('/data/apps.json')
      .then(res => res.json())
      .then((data: AppConfig[]) => {
        const app = data.find(app => app.title === title);
        if (app) setConfig(app);
      });
  }, [title]);

  return (
    <Draggable grid={[46, 46.5]} bounds="parent" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="deskIcon"
        style={{
          width: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'var(--cursor-arrow)',
          userSelect: 'none',
        }}
        onDoubleClick={() => onOpen(title)}
      >
        {config && (
          <div className='desktop-icon' tabIndex={0}>
            <img
              src={`/icons/${config.icon}`}
              style={{ width: '40px', height: 'auto' }}
              draggable={false}
              alt={title}
            />
            <p className='icon-label'
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
