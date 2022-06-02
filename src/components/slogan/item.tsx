import React from 'react';
import { Line } from './line';

const TIME_SPACE = 1000; // 1s

export const Item = (props: { question: string; answer: string; onRendered: () => void }): React.ReactElement => {
  const [isShowAnswer, setIsShowAnswer] = React.useState<boolean>(false);

  const onRenderedQuestion = () => {
    setTimeout(() => {
      setIsShowAnswer(true);
    }, TIME_SPACE);
  };

  const onRenderedAnswer = () => {
    setTimeout(() => {
      props.onRendered();
    }, TIME_SPACE);
  };

  return (
    <div className="space-y-4">
      <Line text={props.question} onRendered={onRenderedQuestion} />
      {isShowAnswer && <Line text={props.answer} onRendered={onRenderedAnswer} />}
    </div>
  );
};
