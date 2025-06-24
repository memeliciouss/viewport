'use client';

import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

declare global {
  interface Window {
    WinBox: any;
  }
}

interface WinBoxComponentProps {
  title: string;
  mount: React.ReactNode;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
}

export default function WinBoxComponent({
  title,
  mount,
  x = "60%",
  y = "10%",
  width = "400px",
  height = "300px",
}: WinBoxComponentProps) {
  const winboxRef = useRef<any>(null);

  useEffect(() => {
    // Load WinBox JS and CSS if not already loaded
    if (!window.WinBox) {
      const script = document.createElement("script");
      script.src = "/winbox/winbox.min.js";
      script.async = true;
      document.body.appendChild(script);

      const customStyle = document.createElement("link");
      customStyle.rel = "stylesheet";
      customStyle.href = "/winbox/windows-theme.css";
      document.head.appendChild(customStyle);
    }
  }, []);

  const openWinBox = () => {
    if (!window.WinBox) return;

    if (winboxRef.current) {
      if (winboxRef.current.min) {
        winboxRef.current.restore();
      } else {
        winboxRef.current.focus();
      }
      return;
    }

    // default menubar at top of every window
    const menuBar = (
      <div className="winbox-menu-bar">
        <span><u>F</u>ile</span>
        <span><u>E</u>dit</span>
        <span><u>V</u>iew</span>
        <span><u>H</u>elp</span>
      </div>

    )
    // Create mount container and render React content inside it
    const mountContainer = document.createElement("div");
    createRoot(mountContainer).render(
      <>
        {menuBar}
        <div className="winbox-body">
          {mount}
        </div>
      </>
    );

    // Create new WinBox window
    winboxRef.current = new window.WinBox(title, {
      width,
      height,
      x,
      y,
      icon: `/icons/${title}.ico`,
      mount: mountContainer,
      onclose: () => {
        winboxRef.current = null;
      },
    });
    winboxRef.current.removeControl("wb-full");
  };

  return (
    <div
      style={{
        width: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={openWinBox}
    >
      <img
        src={`/icons/${title}.ico`}
        style={{ width: '38px', height: '42px' }}
        alt={title}
      />
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '13px',
          marginTop: '0.25rem',
        }}
      >
        {title}
      </p>
    </div>
  );
}
