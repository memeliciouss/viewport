'use client';

import Taskbar from '@/components/taskbar';
import dynamic from 'next/dynamic';


const WinBoxComponent = dynamic(() => import('@/components/winbox'), { ssr: false });

export default function Home() {
  return (
    <>
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 0,
        gap: '1rem', 
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
          <iframe
            src="/data/RakshitRaj-resume.pdf"
            width="100%"
            height="600px"
          ></iframe>
        }
      />

      <WinBoxComponent
        title="Paint.js"
        mount={
          <iframe src="https://jspaint.app"></iframe>
        }
      />
      </main>
      <Taskbar/>
      </>
  );
}
