'use client';
import React, { useEffect, useState } from 'react';

type MenuItem =
  | { label: string; enabled: boolean }
  | 'divider';

interface ContextMenuProps {
  onPropertiesClick: () => void;
}

export default function ContextMenu({ onPropertiesClick }: ContextMenuProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const menuItems: MenuItem[] = [
    { label: 'View', enabled: true },
    { label: 'Arrange Icons', enabled: false },
    { label: 'Refresh', enabled: true },
    'divider',
    { label: 'Copy', enabled: false },
    { label: 'Paste', enabled: false },
    { label: 'Paste Shortcut', enabled: false },
    'divider',
    { label: 'Properties', enabled: true }
  ];

  useEffect(() => {
    const showMenu = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const hideMenu = () => setVisible(false);

    document.addEventListener('contextmenu', showMenu);
    document.addEventListener('click', hideMenu);

    return () => {
      document.removeEventListener('contextmenu', showMenu);
      document.removeEventListener('click', hideMenu);
    };
  }, []);

  return visible ? (
    <div
      style={{
        top: position.y,
        left: position.x,
        position: 'absolute',
        width: '140px',
        backgroundColor: '#B2B2B3',
        borderTop: '2px solid #FFFEFE',
        borderLeft: '2px solid #FFFEFE',
        borderBottom: '2px solid #808080',
        borderRight: '2px solid #808080',
        margin: '0 2px',
        padding: '2px 4px',
        borderRadius: '2px',
        zIndex: 9999,
        fontSize: '14px',
        fontFamily: 'inherit',
        userSelect: 'none'
      }}
    >
      {menuItems.map((item, idx) => {
        if (item === 'divider') {
          return (
            <div key={idx} style={{ margin: '4px 4px' }}>
              <div
                style={{
                  height: '1px',
                  backgroundColor: '#808080',
                }}
              />
              <div
                style={{
                  height: '1px',
                  backgroundColor: '#FFFBF0',
                }}
              />
            </div>
          );
        }

        const { label, enabled } = item;

        return (
          <div
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              if (!enabled) return;

              if (label === 'Properties') {
                onPropertiesClick();
              } else if (label === 'Refresh') {
                location.reload();
              }
            }}
            style={{
              padding: '2px 10px',
              color: enabled ? '#000000' : '#6e6e6e',
              backgroundColor: 'transparent',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => {
              if (enabled) {
                e.currentTarget.style.backgroundColor = '#000080';
                e.currentTarget.style.color = '#ffffff';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = enabled ? '#000000' : '#6e6e6e';
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  ) : null;
}
