'use client';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

declare global {
  interface Window {
    WinBox: any;
  }
}

interface AppConfig {
  title: string;
  icon?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  showMenuBar?: boolean;
  maximize?: boolean;
  url?: string;
}

interface Props {
  mounts: Record<string, React.ReactNode>;
  apps: AppConfig[];
}

export default function WindowManager({ mounts, apps }: Props) {
  const winboxRefs = useRef<Record<string, any>>({});

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/customui/winbox.min.js';
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/customui/windows-theme.css';
    document.head.appendChild(style);
  }, []);

  const openWindow = (title: string) => {
    const config = apps.find((a) => a.title === title);
    if (!window.WinBox || !config) return;

    const isMountable = mounts[title] !== undefined;

    if (winboxRefs.current[title]) {
      const existing = winboxRefs.current[title];
      if (existing.min) {
        existing.restore();
        existing.focus();
      } else {
        existing.focus();
      }
      return;
    }

    const classList = ['my-theme'];
    if (config.maximize === false) classList.push('no-max');

    const options: any = {
      title,
      width: config.width || '400px',
      height: config.height || '300px',
      x: config.x || '50%',
      y: config.y || '10%',
      icon: config.icon ? `/icons/${config.icon}` : false,
      class: classList,
      top: '0',
      bottom: '41px',
      onclose: () => {
        winboxRefs.current[title] = null;
      }
    };

    if (mounts[title]) {
      const mountContainer = document.createElement('div');
      createRoot(mountContainer).render(
        <>
          {config.showMenuBar !== false && (
            <div className="winbox-menu-bar">
              <span><u>F</u>ile</span>
              <span><u>E</u>dit</span>
              <span><u>V</u>iew</span>
              <span><u>H</u>elp</span>
            </div>
          )}
          <div className="winbox-body">{mounts[title]}</div>
        </>
      );
      options.mount = mountContainer;
    } else if (config.url) {
      options.url = config.url;

      options.oncreate = function () {
        const wrapper = document.createElement("div");
        wrapper.style.cssText = `
      background: #c0c0c0;
      font-size: 12px;
      margin: 2px 6px;
      padding: 0;
      border-bottom: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
      border-top: 2px solid #808080;
      border-left: 2px solid #808080;
      box-sizing: border-box;
    `;

        const bar = document.createElement("div");
        bar.style.cssText = `
      display: flex;
      align-items: center;
      padding: 2px 4px;
      gap: 4px;
      background: #c0c0c0;
    `;

        // Combined icon + label into one div using innerHTML
        const iconLabel = document.createElement("div");
        iconLabel.innerHTML = `
      <img src="/icons/web.png" style="
    width: 34px;
    height: auto;
    vertical-align: middle;
    margin-right: -9px;
    display: inline-block;
    position: relative;
    top: -1px;
  " />
      <span style="line-height: 20px; padding-left: 2px;">Address:</span>
    `;
        bar.appendChild(iconLabel);

        const urlBox = document.createElement("div");
        urlBox.textContent = config.url || "";
        urlBox.style.cssText = `
      background: #FEFEFF;
      border-top: 2px inset #808080;
      border-left: 2px inset #808080;
      border-bottom: 2px inset #ffffff;
      border-right: 2px inset #ffffff;
      padding: 2px 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
      font-size: 12px;
      line-height: 16px;
    `;
        bar.appendChild(urlBox);

        wrapper.appendChild(bar);
        this.body.prepend(wrapper);
        const iframe = this.body.querySelector("iframe");
        if (iframe) {
          const borderWrapper = document.createElement("div");
          borderWrapper.style.cssText = `
    border: 2px solid #808080;
    padding: 0px;
    margin: 4px;
    background: white;
    box-sizing: border-box;
    height: calc(100% - 60px);
  `;
          this.body.appendChild(borderWrapper);
          borderWrapper.appendChild(iframe);
        }
      };
    }


    const win = new window.WinBox(options);
    win.removeControl("wb-full");
    winboxRefs.current[title] = win;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__openAppWindow = openWindow;
    }
  }, [apps]);

  return null;
}
