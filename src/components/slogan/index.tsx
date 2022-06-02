import { useQuery } from 'hooks/query';
import React from 'react';
import { getSlogans } from './fetcher';
import { Item } from './item';
import { LetGo } from './let-go';
export const Slogan = (): React.ReactElement => {
  const [slogans] = useQuery(getSlogans(), []);
  const [count, setCount] = React.useState<number>(0);
  const onRendered = (index: number) => () => {
    setCount(index + 1);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      {slogans &&
        slogans.data?.map((slogan, index) =>
          count === index ? (
            <Item key={slogan.id} question={slogan.question} answer={slogan.answer} onRendered={onRendered(index)} />
          ) : (
            <React.Fragment key={slogan.id}></React.Fragment>
          )
        )}
      {slogans && slogans.data && slogans.data?.length === count && <LetGo />}
    </div>
  );
};
