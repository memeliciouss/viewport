'use client';

import Winbox from "@/components/winbox";

export default function Page() {
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
    </main>
  );
}
