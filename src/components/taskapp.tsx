// taskbar apps
'use client';

import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

declare global {
  interface Window {
    WinBox: any;
  }
}

interface TaskappProps {
  title: string;
  mount: React.ReactNode;
}

interface AppConfig {
  title: string;
  icon?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  showMenuBar?: boolean;
}

export default function Taskapp({
  title,
  mount,
}: TaskappProps) {
  const winboxRef = useRef<any>(null);
  const [config, setConfig] = useState<AppConfig | null>(null);

  useEffect(() => {
    if (!window.WinBox) {
      const script = document.createElement("script");
      script.src = "/customui/winbox.min.js";
      script.async = true;
      document.body.appendChild(script);

      const customStyle = document.createElement("link");
      customStyle.rel = "stylesheet";
      customStyle.href = "/customui/windows-theme.css";
      document.head.appendChild(customStyle);
    }

    // Load JSON config for this app
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data: AppConfig[]) => {
        const app = data.find((item) => item.title === title);
        if (app) setConfig(app);
      });
  }, [title]);

  const openWinBox = () => {
    if (!window.WinBox || !config) return;

    if (winboxRef.current) {
      if (winboxRef.current.min) {
        winboxRef.current.restore();
      } else {
        winboxRef.current.focus();
      }
      return;
    }

    const menuBar = (
      <div className="winbox-menu-bar">
        <span><u>F</u>ile</span>
        <span><u>E</u>dit</span>
        <span><u>V</u>iew</span>
        <span><u>H</u>elp</span>
      </div>
    );

    const mountContainer = document.createElement("div");
    createRoot(mountContainer).render(
      <>
        {config.showMenuBar !== false && menuBar}
        <div className="winbox-body">{mount}</div>
      </>
    );

    winboxRef.current = new window.WinBox(title, {
      width: config.width || "400px",
      height: config.height || "300px",
      x: config.x || "60%",
      y: config.y || "10%",
      icon: `/icons/${config.icon}`,
      mount: mountContainer,
      onclose: () => {
        winboxRef.current = null;
      },
      top: "0",
      bottom: "41px", // to provide room for taskbar 
      // minimized window is 35px thick

    });

    winboxRef.current.removeControl("wb-full");
  };


  return (<>
    <style jsx>{`
    .taskIcon {
      cursor: var(--cursor-arrow);
      height: 42px;
      display: flex;
      align-items: center;
    }

    .taskIcon:hover {
      background-color: #000080;
      color: white;
    }

    .taskIcon:hover span {
      color: white;
    }
  `}</style>

    <div className="taskIcon" onClick={openWinBox}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '6px 14px',
          fontSize: '16px',
          fontFamily: '"windows", sans-serif',
          cursor: 'var(--cursor-arrow)',
        }}
      >
        {config && (
          <img
            draggable={false}
            src={`/icons/${config.icon}`}
            style={{ width: '34px', height: 'auto' }}
            alt={config.title}
          />
        )}
        <span>{title}</span>
      </div>
    </div>
  </>

  );
}
