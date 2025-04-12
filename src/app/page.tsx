'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Dynamically load the JS file from public/winbox
    const script = document.createElement('script');
    script.src = '/winbox/winbox.min.js'; // Path to JS file in public folder
    script.onload = () => {
      // @ts-ignore
      new WinBox('Non-bundled WinBox', {
        x: 'center',
        y: 'center',
        width: 400,
        height: 300,
        html: '<h1>Loaded from public</h1>',
      });
    };
    document.body.appendChild(script);

    // Add the CSS link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/winbox/winbox.min.css'; // Path to CSS file in public folder
    document.head.appendChild(link);
  }, []);

  return <div />;
}
