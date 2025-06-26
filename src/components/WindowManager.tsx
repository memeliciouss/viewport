'use client';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

declare global{
    interface Window{
        WinBox:any;
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
    resizable?: boolean;
    maximize?: boolean;
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
        if (!window.WinBox || !config || !mounts[title]) return;

        if (winboxRefs.current[title]) {
            const existing = winboxRefs.current[title];
            if (existing.min) { existing.restore(); existing.focus(); }
            else existing.focus();
            return;
        }

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

        const win = new window.WinBox(title, {
            width: config.width || '400px',
            height: config.height || '300px',
            x: config.x || '50%',
            y: config.y || '10%',
            icon: `/icons/${config.icon}`,
            mount: mountContainer,
            onclose: () => {
                winboxRefs.current[title] = null;
            },
            top: '0',
            bottom: '41px', // to give space for taskbar
            // right:'230px', 
            noResize: config.resizable === false,
        });
        win.removeControl("wb-full");
        if (config.resizable === false) win.setResizable(false);
        if (config.maximize === false) win.removeControl('wb-max');
        winboxRefs.current[title] = win;
    };

    // Expose openWindow to global for Deskapp use (client-only)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window as any).__openAppWindow = openWindow;
        }
    }, [apps]);


    return null;
}
