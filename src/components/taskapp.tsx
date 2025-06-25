// taskbar apps

'use client';

import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

declare global {
  interface Window {
    WinBox: any;
  }
}

interface WinBoxComponentProps {
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

export default function WinBoxComponent({
  title,
  mount,
}: WinBoxComponentProps) {
  const winboxRef = useRef<any>(null);
  const [config, setConfig] = useState<AppConfig | null>(null);

  useEffect(() => {
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
      icon: `/icons/${config.icon || title}.ico`,
      mount: mountContainer,
      onclose: () => {
        winboxRef.current = null;
      },
      top:"0",
      bottom:"41px", // to provide room for taskbar 
      // minimized window is 35px thick
      
    });

    winboxRef.current.removeControl("wb-full");
  };


  return (
    <div className="deskIcon"
      style={{
        width: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={openWinBox}
    >
      <img
        src={`/icons/${config?.icon || title}.ico`}
        style={{ width: "38px", height: "42px" }}
        alt={title}
      />
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "13px",
          marginTop: "0.25rem",
        }}
      >
        {title}
      </p>
    </div>
  );
}
