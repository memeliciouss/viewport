'use client';

import Winbox from "@/components/winbox";
import { useEffect, useState } from "react";

export default function Page() {

  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtml = async () => {
      const res = await fetch("/readme.html");
      const text = await res.text();
      setHtml(text);
    };

    fetchHtml();
  }, []);

  const readme_mount = (
    <div
      className="p-4 text-gray-200 space-y-4"
      style={{
        lineHeight: "1.6",
      }}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );

  const pc_mount = (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">ThisPC</h1>
      <p className="text-sm text-gray-300">Welcome to the main app window.</p>
    </div>
  );

  const paintAppMount = (
    <iframe
      src="https://jspaint.app"
      style={{ width: "100%", height: "100%", border: "none" }}
      title="jspaint.app"
    />
  );
  const minesweeperAppMount = (
    <iframe
      src="https://minesweeper.online/"
      style={{ width: "100%", height: "100%", border: "none" }}
      title="Minesweeper"
    />
  );
  
  return (
    <main>
      <Winbox title="ThisPC" mount={pc_mount} />
      {html && <Winbox title="ReadMe" mount={readme_mount} x="40%" y="15%" width="820px" height="470px" openByDefault />}
      <Winbox title="jspaint.app" mount={paintAppMount} x="30%" y="20%" width="800px" height="500px" />
      <Winbox title="Minesweeper" mount={minesweeperAppMount} x="30%" y="20%" width="800px" height="500px" />
    </main>
  );
}
