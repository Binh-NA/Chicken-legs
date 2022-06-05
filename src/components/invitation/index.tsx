import { useRouter } from 'next/router';
import React from 'react';
import { ScrollBar } from './scroll-bar';

const Container = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <div className="flex flex-col items-center justify-center w-screen min-w-full min-h-screen p-y-8 h-fit">
    {children}
  </div>
);

export const Invitation = (): React.ReactElement => {
  const router = useRouter();
  const { name, sex } = router.query;
  const [percent, setPercent] = React.useState<number>(0);
  const dRef = React.useRef<HTMLDivElement>(null);

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (dRef && dRef.current) {
      let left = dRef.current.scrollLeft;
      left = event.deltaY < 0 ? left - 120 : left + 120;
      if (left < 0) left = 0;
      if (left > dRef.current.scrollWidth) left = dRef.current.scrollWidth;
      dRef.current.scrollLeft = left;
    }
  };

  const onScroll = () => {
    if (dRef && dRef.current) {
      setPercent(Math.round((dRef.current.scrollLeft / (dRef.current.scrollWidth - dRef.current.offsetWidth)) * 100));
    }
  };

  return (
    <div
      className="flex w-auto h-screen overflow-x-auto bg-pink-400 md:overflow-x-hidden font-permanent-marker"
      onWheel={onWheel}
      onScroll={onScroll}
      ref={dRef}
    >
      <ScrollBar percent={percent} />
      <Container>
        <div className="flex items-center justify-center w-full h-full p-6">
          <div
            className="flex max-w-full shadow-sm"
            style={{
              width: 500,
              transform: `scale(${(100 - percent) / 100}) rotate(-${3 + percent}deg)`,
            }}
          >
            <div className="relative flex flex-grow p-6 border-0 border-r-2 border-pink-600 border-dashed rounded-l bg-pink-50">
              <div className="flex items-center justify-center">
                <svg className="flex-none w-24 h-24 text-pink-700">
                  <use href="/icon.svg#beer"></use>
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center flex-grow space-y-2">
                <p className="text-6xl text-center text-slate-700">Invitation</p>
                <p className="text-base text-slate-700">join</p>
                <p className="text-4xl text-center text-slate-700">Farewell Party</p>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6 translate-x-1/2 bg-pink-400 rounded-full -translate-y-2/3"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 translate-x-1/2 bg-pink-400 rounded-full translate-y-2/3"></div>
            </div>
            <div className="flex-none p-6 text-lg uppercase bg-pink-600 rounded-r text-pink-50 whitespace-nowrap">
              {'From - Binh'
                .split('')
                .reverse()
                .map((item, index) => (
                  <p key={index} className="-rotate-90">
                    {item}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex items-center justify-center w-full h-full p-6">
          <div
            className="relative flex max-w-full rounded bg-pink-50"
            style={{
              width: 500,
              boxShadow: '3px 3px #fdf2f8, 6px 6px #fbcfe8, 9px 9px #f9a8d4',
              transform: `scale(${1 - (100 - percent) / 100}) rotate(${100 - percent}deg)`,
            }}
          >
            <div className="w-full px-6 py-8 bg-white rounded shadow-md">
              <p className="mb-6 text-3xl text-center">You&apos;re Invited</p>
              <p className="capitalize">{`Dear ${sex === 'male' ? 'Mr.' : 'Ms.'}${name},`}</p>
              <p>It&apos;s my farewell party.</p>
              <p className="mt-4">
                When: <span className="underline">Thursday, June 9, 2022.</span>
              </p>
              <p>
                At: <span className="underline">6:00p.m.</span>
              </p>
              <p>
                Where: <span className="underline">1450 Truong Sa Street.</span>
              </p>
              <p className="mt-4">
                <em>Thanks and best regards,</em>
              </p>
            </div>
            <p className="absolute px-6 py-3 text-2xl text-pink-600 -rotate-45 border border-pink-700 border-solid rounded right-8 bottom-16">
              <strong>Binh-NA</strong>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
