'use client';

import Taskbar from '@/components/taskbar';
import Deskapp from '@/components/deskapp';

export default function Home() {
  return (
    <>
      <main
        style={{
          position: 'absolute', // start from browser top-left
          top: '14px',
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // items start from left
          justifyContent: 'flex-start', // items start from top
          padding: '12px', // small margin from edges like desktop
          gap: '12px', // space between icons
        }}
      >
        <Deskapp
          title="ThisPC"
          mount={
            <div>
              <h2>This PC</h2>
              <p>yeah so this pc</p>
            </div>
          }
        />
        <Deskapp
          title="Internet"
          mount={
            <iframe src="https://google.com/search?igu=1"></iframe>
          }
        />
        <Deskapp
          title="AboutMe"
          mount={
            <div>
              <h2>smthng about me</h2>
            </div>
          }
        />
        <Deskapp
          title="Resume"
          mount={
            <iframe
              src="/data/RakshitRaj-resume.pdf"
              width="100%"
              height="600px"
            ></iframe>
          }
        />
        <Deskapp
          title="Minesweeper"
          mount={
            <div>
              <iframe src='https://nickarocho.github.io/minesweeper/' />
            </div>
          }
        />
        <Deskapp
          title="Paint.js"
          mount={
            <iframe src="https://jspaint.app"></iframe>
          }
        />
      </main>
      <Taskbar />
    </>
  );
}
