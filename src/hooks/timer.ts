import React, { useEffect } from 'react';

const TIC_DEFAULT = 1000; // 1s

export const useTimer = (tic?: number, max?: number) => {
  const [count, setCount] = React.useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((preCount) => {
        let newCount = preCount + 1;
        if (max && newCount >= max) {
          newCount = 0;
        }
        return newCount;
      });
    }, tic ?? TIC_DEFAULT);

    return () => clearInterval(intervalId);
  });

  return [count];
};
