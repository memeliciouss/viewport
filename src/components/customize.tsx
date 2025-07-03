'use client';
import { useState, useEffect } from "react";
import "@/styles/wallpaper.css";

// update any wallpapers in componenets/AsciiObserver.tsx as well for ascii art
const wallpapers = [
  { name: "Classic Green", className: "wallpaper-classic" },
  { name: "viewport", className: "wallpaper-viewport" },
  { name: "Saturn", className: "wallpaper-saturn" },
  { name: "The Doors", className: "wallpaper-doors" },
  { name: "Artist", className: "wallpaper-artist" },
  { name: "Drums", className: "wallpaper-drums" },
  { name: "Skeleton", className: "wallpaper-skeleton" },
];


export default function Customize() {
  const [selectedPreview, setSelectedPreview] = useState(() => {
    const active = wallpapers.find(wp => document.body.classList.contains(wp.className));
    return active?.className || "wallpaper-default";
  });

  const [appliedWallpaper, setAppliedWallpaper] = useState(() => {
    const active = wallpapers.find(wp => document.body.classList.contains(wp.className));
    return active?.className || "wallpaper-default";
  });

  useEffect(() => {
    wallpapers.forEach(wp => document.body.classList.remove(wp.className));
    document.body.classList.add(appliedWallpaper);
  }, [appliedWallpaper]);

  return (
    <div className="page-container" style={{ width: '100%', height: '100%' }}>

      <div style={{ display: 'flex', width: '100%' }}>
        <div className="tab-shell">
          <div className="tab-bar">
            <div className="tab active">Wallpapers</div>
          </div>
          <div className="tab-content-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ padding: "10px", width: "100%" }}>
              <div className="window-body">

                {/* Monitor preview */}
                <div style={{ display: "flex", justifyContent: "center", padding: "12px 80px" }}>
                  <div
                    style={{
                      width: "160px", // Fixed width
                      height: "136px", // Fixed height
                      backgroundImage: 'url("/data/crt.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      position: "relative",
                      flexShrink: 0, // Prevent shrinking in flex layouts
                    }}
                  >
                    <div
                      className={`preview-box ${selectedPreview}`}
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "18px",
                        width: "120px",
                        height: "90px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        imageRendering: "pixelated",
                        transition: "background-image 0.4s ease-in-out",
                      }}
                    />
                  </div>
                </div>

                {/* Wallpaper list */}
                <fieldset style={{ margin: "0 12px 10px 12px" }}>
                  <span className="block text-[16px]">Select a wallpaper:</span>
                  <div className="listbox-95" style={{
                    maxHeight: "130px",
                    overflow: 'auto',
                    border: '2px solid',
                    borderColor: '#808080 #FFFFFF #FFFFFF #808080'
                  }}>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {wallpapers.map((wp) => (
                      <li
                        key={wp.className}
                        onClick={() => setSelectedPreview(wp.className)}
                        style={{
                          fontSize: "13px",
                          padding: "0px 6px",
                          backgroundColor: selectedPreview === wp.className ? "#000080" : "white",
                          color: selectedPreview === wp.className ? "white" : "black",
                          cursor: "pointer",
                        }}
                      >
                        {wp.name}
                      </li>
                    ))}
                  </ul>
              </div>
            </fieldset>

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: '8px' }}>
              <button
                className="w-button"
                style={{ padding: '2px 18px' }}
                onClick={() => setAppliedWallpaper(selectedPreview)}
                type="button"
              >
                <span className="block text-[11px]">Apply</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
      </div >
    </div >
  );
}
