// components/MiniMap.tsx
'use client';

import { useEffect, useState } from 'react';

const MiniMap = () => {
  const [activeSection, setActiveSection] = useState({ row: 1, col: 1 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const col = Math.round(scrollX / viewportWidth);
      const row = Math.round(scrollY / viewportHeight);

      setActiveSection({ row, col });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (row: number, col: number) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: row * viewportHeight,
      left: col * viewportWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 w-24 h-24 bg-gray-800 bg-opacity-70 rounded shadow-lg z-50">
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <div
              key={`${row}-${col}`}
              onClick={() => handleClick(row, col)}
              className={`border border-gray-600 cursor-pointer ${
                activeSection.row === row && activeSection.col === col
                  ? 'bg-white opacity-80'
                  : 'bg-gray-500 opacity-50'
              }`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MiniMap;
