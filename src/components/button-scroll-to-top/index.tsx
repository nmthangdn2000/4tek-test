import { useEffect, useRef, useState } from 'react';

export const ButtonScrollToggle = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsAtTop(isTop);

      const button = buttonRef.current;
      if (!button) return;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtTop) {
      const targetElement = document.getElementById('about');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-4 right-4 transition-opacity duration-300 bg-white rounded-full p-2 cursor-pointer shadow-md"
      onClick={handleClick}
    >
      <img
        src="/arrow-right.png"
        alt="Toggle Scroll"
        className="transition-all duration-300"
        style={{
          transform: isAtTop ? 'rotate(90deg)' : 'rotate(-90deg)',
        }}
      />
    </div>
  );
};
