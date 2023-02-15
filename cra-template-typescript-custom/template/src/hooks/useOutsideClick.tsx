import React, { RefObject, useEffect } from 'react';

const handlers: ((event: React.MouseEvent) => void)[] = [];

const handleMouseDown = (event: any) => {
  handlers.forEach((handler) => handler(event));
};
document.addEventListener('mousedown', handleMouseDown);

export const useOutsideClick = (ref: RefObject<HTMLDivElement>, cb: (event: React.MouseEvent) => void): void => {
  useEffect(() => {

    const handleClickOutside = (event: React.MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
        cb(event);
      }
    };

    handlers.push(handleClickOutside);

    return () => {
      const handlerIndex = handlers.indexOf(handleClickOutside);
      if (handlerIndex !== -1) {
        handlers.splice(handlerIndex, 1);
      }
    };
  }, [cb, ref]);
};
