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
  width?: string;  // added width prop
  height?: string; // added height prop
  openByDefault?: boolean;
}

export default function WinBoxComponent({
  title,
  mount,
  x = "60%",
  y = "10%",
  width = "400px",  // default width
  height = "300px", // default height
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

    const customStyle = document.createElement("style");
    customStyle.innerHTML = `
      .wb-body {
        background: #494959;
        margin: 0px;
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

    const headerHeight = 40;

    winboxRef.current = new window.WinBox(title, {
      width,
      height,
      x,
      y,
      top: headerHeight,
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
    <div style={{ width: "128px", height: "128px" }}>
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
        <img src={`/icons/${title}.ico`} style={{ height: "48px", width: "48px" }} />
        <p className="whitespace-nowrap text-white" style={{fontFamily:"ByteBounce",fontSize:"24px"}} >{title}</p>
      </button>
    </div>
  );
}
