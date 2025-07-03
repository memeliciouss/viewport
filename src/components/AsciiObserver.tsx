'use client'

import { useEffect } from "react";

export default function AsciiObserver() {
  useEffect(() => {

    // update wallpapers in componenets/customize.tsx as well
    const wallpapers = [
      "wallpaper-classic",
      "wallpaper-viewport",
      "wallpaper-saturn",
      "wallpaper-doors",
      "wallpaper-artist",
      "wallpaper-drums",
      "wallpaper-skeleton",
    ];

    const injectAscii = () => {
      const active = wallpapers.find(wp => document.body.classList.contains(wp));
      if (!active) return;

      const name = active.replace("wallpaper-", "");

      document.querySelectorAll('.ascii-overlay').forEach(el => el.remove());

      fetch(`/data/ascii/${name}.txt`)
        .then(res => res.ok ? res.text() : "")
        .then(text => {
          if (!text) return;
          const div = document.createElement("div");
          div.id = "ascii-bg";
          div.className = "ascii-overlay";
          div.textContent = text;
          document.body.appendChild(div);
        });
    };

    injectAscii(); // on initial load

    const observer = new MutationObserver(() => {
      injectAscii();
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return null;
}
