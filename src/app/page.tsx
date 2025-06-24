'use client';

import dynamic from 'next/dynamic';
const WinBoxComponent = dynamic(() => import('@/components/winbox'), { ssr: false });

export default function Home() {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '1rem',
        gap: '1.5rem',
      }}
    >
      <WinBoxComponent
        title="Minesweeper"
        mount={
          <div>
            <iframe src='https://nickarocho.github.io/minesweeper/'/>
          </div>
        }
      />

      <WinBoxComponent
        title="Music"
        mount={
          <div>
            <h2>Music Player</h2>
            <p>🎵 Play some music here.</p>
          </div>
        }
      />
    </main>
  );
}
