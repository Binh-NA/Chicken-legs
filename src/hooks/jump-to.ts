import React from 'react';

const TIC_DEFAULT = 1000; // 1s

export const useJumpTo = (tic?: number, max?: number) => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((preCount) => {
        const newCount = preCount + 1;
        if (max && newCount > max) {
          return preCount;
        }
        return newCount;
      });
    }, tic ?? TIC_DEFAULT);

    if (max && count === max) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  });

  return [count];
};
