"use client";
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
  openByDefault?: boolean;
}

export default function WinBoxComponent({
  title,
  mount,
  x = "60%",
  y = "10%",
  openByDefault = false,
}: WinBoxComponentProps) {
  const winboxRef = useRef<any>(null);

  useEffect(() => {
    const loadWinBox = () => {
      if (!window.WinBox) {
        const script = document.createElement("script");
        script.src = "/winbox/winbox.min.js";
        script.async = true;

        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "/winbox/winbox.min.css";
        document.head.appendChild(style);

        script.onload = () => {
          if (openByDefault) {
            openWinBox();
          }
        };
        document.body.appendChild(script);
      } else if (openByDefault) {
        openWinBox();
      }
    };

    loadWinBox();

    // Custom styling for the window
    const customStyle = document.createElement("style");
    customStyle.innerHTML = `
      .wb-body {
        background: #494959;
      }
    `;
    document.head.appendChild(customStyle);
  }, [openByDefault]);

  const openWinBox = () => {
    if (!window.WinBox) return;

    if (winboxRef.current) {
      winboxRef.current.focus();
      return;
    }

    const mountContainer = document.createElement("div");
    mountContainer.className = "wb-body";
    createRoot(mountContainer).render(mount);

    winboxRef.current = new window.WinBox(title, {
      width: "400px",
      height: "300px",
      x,
      y,
      border: "3px",
      mount: mountContainer,
      onfocus: function () {
        this.setBackground("#1A202C");
      },
      onblur: function () {
        this.setBackground("#4B5468");
      },
      onclose: () => {
        winboxRef.current = null;
      },
    });
  };

  return (
    <div style={{ width: '128px', height: '128px' }}>
      <button
        onClick={openWinBox}
        style={{
          color: "#C0C1C0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <img src={`/icons/${title}.png`} style={{ height: '78px', width: '78px' }} />
        <p className="whitespace-nowrap">{title}</p>
      </button>
    </div>
  );
}
