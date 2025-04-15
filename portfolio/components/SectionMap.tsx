'use client';

export default function SectionMap() {
  const scrollTo = (row: number, col: number) => {
    console.log('row: ' + row);
    console.log('col: ' + col);
    window.scrollTo({
      top: row * window.innerHeight,
      left: col * window.innerWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className='fixed bottom-4 right-4 z-50 grid grid-cols-3 gap-1 p-2 bg-black/60 backdrop-blur-sm rounded-md shadow-md'>
      {[...Array(9)].map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;

        return (
          <button
            key={`${row}-${col}`}
            onClick={() => scrollTo(row, col)}
            title={`Go to section [${row}, ${col}]`}
            className='w-8 h-8 bg-white/80 hover:bg-white rounded transition transform hover:scale-[1.08] transition duration-300'
          />
        );
      })}
    </div>
  );
}
