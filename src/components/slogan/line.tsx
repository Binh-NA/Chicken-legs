import { useJumpTo } from 'hooks/jump-to';
import React from 'react';

export const Line = (props: { text: string; onRendered: () => void }): React.ReactElement => {
  const [count] = useJumpTo(100, props.text.length);

  React.useEffect(() => {
    if (count === props.text.length) {
      props.onRendered();
    }
  }, [count, props]);

  return (
    <p className="font-permanent-marker text-5xl">
      {props.text.split('').map((item, index) => (
        <span
          key={index.toString()}
          className={`duration-300 ease-in-out ${index <= count ? 'opacity-100' : 'opacity-0'}`}
        >
          {item}
        </span>
      ))}
    </p>
  );
};
