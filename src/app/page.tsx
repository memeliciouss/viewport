'use client';
import { useEffect, useState } from 'react';
import Deskapp from '@/components/deskapp';
import WindowManager from '@/components/WindowManager';
import Taskbar from '@/components/taskbar';
import Customize from '@/components/customize';
import About from '@/components/about';
import ContextMenu from '@/components/contextMenu';
interface AppConfig {
  title: string;
  icon?: string;
}

export default function Home() {
  const [apps, setApps] = useState<AppConfig[]>([]);

  useEffect(() => {
    fetch('/data/apps.json')
      .then((res) => res.json())
      .then((data: AppConfig[]) => setApps(data));
  }, []);
  const handleOpen = (title: string) => {
    if (typeof window !== 'undefined' && (window as any).__openAppWindow) {
      (window as any).__openAppWindow(title);
    }
  };
  return (
    <>
      <main
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          padding: '1rem 1rem 0 1rem',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          gap: '12px',
          maxHeight: '90vh',
        }}
      >
        <Deskapp title="ThisPC" onOpen={handleOpen} />
        <Deskapp title="AboutMe" onOpen={handleOpen} />
        <Deskapp title="Resume" onOpen={handleOpen} />
        <Deskapp title="Internet" onOpen={handleOpen} />
        <Deskapp title="Customize" onOpen={handleOpen} />
        <Deskapp title="Paint" onOpen={handleOpen} />
        <Deskapp title="Pacman" onOpen={handleOpen} />
        <Deskapp title="Mines" onOpen={handleOpen} />
      </main>

      <WindowManager
        apps={apps}
        mounts={{
          ThisPC: <div><h2>This PC</h2><p>yeah so this pc</p></div>,
          AboutMe: <About />,
          Customize: <Customize />,
        }}
      />
      <Taskbar onOpen={handleOpen}/>
      <ContextMenu onPropertiesClick={() => handleOpen('Customize')} />
    </>
  );
}
