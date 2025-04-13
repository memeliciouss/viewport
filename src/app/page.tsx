'use client';

import Winbox from "@/components/winbox";
import { useEffect, useState } from "react";



export default function Page() {

  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubReadme = async () => {
      const response = await fetch(
        "https://api.github.com/repos/memeliciouss/memeliciouss/contents/README.md"
      );
      const data = await response.json();
      const content = atob(data.content); // Decode base64 content
      setReadmeContent(content);
    };

    fetchGitHubReadme();
  }, []);

  const readme_mount = (
    <div className="p-4">
      <pre className="text-sm text-gray-300 whitespace-pre-wrap">{readmeContent}</pre>
    </div>
  );
  const notes_mount = (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Notes App</h1>
      <p className="text-sm text-gray-300">This is a simple notes window.</p>
    </div>
  );

  const app_mount = (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">My App</h1>
      <p className="text-sm text-gray-300">Welcome to the main app window.</p>
    </div>
  );

  return (
    <main>
      <Winbox title="My App" mount={app_mount} openByDefault />
      <Winbox title="Notes" mount={notes_mount}/>
      <Winbox title="README" mount={readme_mount}/>
    </main>
  );
}
