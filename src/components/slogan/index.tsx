import { Information } from 'components/information';
import { useQuery } from 'hooks/query';
import React from 'react';
import { getSlogans } from './fetcher';
import { Item } from './item';
import { LetGo } from './let-go';
export const Slogan = (): React.ReactElement => {
  const [slogans] = useQuery(getSlogans(), []);
  const [isLetGo, setIsLetGo] = React.useState(false);
  const [count, setCount] = React.useState<number>(0);

  const onRendered = (index: number) => () => {
    setCount(index + 1);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen p-6">
      {!isLetGo &&
        slogans &&
        slogans.data?.map((slogan, index) =>
          count === index ? (
            <Item key={slogan.id} question={slogan.question} answer={slogan.answer} onRendered={onRendered(index)} />
          ) : (
            <React.Fragment key={slogan.id}></React.Fragment>
          )
        )}
      {!isLetGo && slogans && slogans.data && slogans.data?.length === count && (
        <LetGo onClick={() => setIsLetGo(true)} />
      )}
      {isLetGo && <Information />}
    </div>
  );
};
