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
            <iframe src='https://nickarocho.github.io/minesweeper/' />
          </div>
        }
      />

      <WinBoxComponent
        title="ReadMe"
        mount={
          <div>
            <h2>This PC</h2>
            <p>yeah so this pc</p>
          </div>
        }
      />
      <WinBoxComponent
        title="Resume"
        mount={
          <iframe src="https://drive.google.com/file/d/1ih21kC0bTbITx_K9ZprKglOLDYixuLFN/preview" width="640" height="480" allow="autoplay"></iframe>
        }
      />
    </main>
  );
}
