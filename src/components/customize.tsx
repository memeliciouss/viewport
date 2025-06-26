'use client';
import { useState, useEffect } from "react";
import "@/styles/wallpaper.css";

const wallpapers = [
  { name: "Default", className: "wallpaper-default" },
  { name: "Sky", className: "wallpaper-sky" },
  { name: "Night", className: "wallpaper-night" },
  { name: "Grid", className: "wallpaper-grid" },
];

export default function Customize() {
  const [selectedPreview, setSelectedPreview] = useState("wallpaper-default");
  const [appliedWallpaper, setAppliedWallpaper] = useState("wallpaper-default");

  // Apply on mount or when apply button is used
  useEffect(() => {
    // Remove all existing wallpaper classes from body
    wallpapers.forEach(wp => document.body.classList.remove(wp.className));
    document.body.classList.add(appliedWallpaper);
  }, [appliedWallpaper]);

  return (
    <div style={{ padding: "10px", fontFamily: "sans-serif" }}>
      <label style={{ display: "block", marginBottom: "6px" }}>
        Choose Wallpaper:
      </label>

      <select
        className="select"
        value={selectedPreview}
        onChange={(e) => setSelectedPreview(e.target.value)}
      >
        {wallpapers.map((wp) => (
          <option key={wp.className} value={wp.className}>
            {wp.name}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Preview:</label>
        <div
          className={selectedPreview}
          style={{
            width: "240px",     // 4:3 aspect ratio
            height: "180px",
            border: "2px inset #fff",
            boxShadow: "0 0 4px rgba(0,0,0,0.2)",
            marginBottom: "10px"
          }}
        />
      </div>

      <button
        className="btn"
        style={{
          fontSize: "14px",
          fontFamily: '"windows", sans-serif',
          padding: "4px 8px",
          cursor: "var(--cursor-arrow)"
        }}
        onClick={() => setAppliedWallpaper(selectedPreview)}
      >
        Apply
      </button>
    </div>
  );
}
