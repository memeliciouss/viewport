'use client';

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
        padding: '0 10px',
        zIndex: 1,
      }}
    >
      {/* You can add buttons/icons here later */}
    </div>
  );
}
