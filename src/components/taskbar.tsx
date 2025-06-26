'use client';
import Image from 'next/image';
export default function Taskbar() {
  return (
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
          backgroundColor: '#6B6B6B', // Dark gray
          margin: '0 3px',
        }}
      />
    </div>
  );
}
