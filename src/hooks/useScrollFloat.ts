
import { useEffect, useState } from 'react';

export const useScrollFloat = (intensity: number = 1) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const floatOffset = Math.sin(scrollY * 0.002) * 20 * intensity;
      setOffset(floatOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return offset;
};
