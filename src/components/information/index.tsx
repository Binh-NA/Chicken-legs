import React from 'react';
import { ScrollBar } from './scroll-bar';

const Container = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <div className="flex flex-col items-center justify-center w-screen min-w-full p-6 space-y-8">{children}</div>
);

const RestaurantItem = ({ children, icon }: { children: React.ReactNode; icon: string }): React.ReactElement => (
  <p className="flex items-center gap-4 px-6 py-3 text-xl shadow-md">
    <svg className="w-8 h-8">
      <use href={`/icon.svg#${icon}`} />
    </svg>
    {children}
  </p>
);

const BeerItem = (): React.ReactElement => (
  <p className="flex items-center justify-start gap-4 px-6 py-3 text-6xl md:w-2/3">
    <svg className="w-12 h-12">
      <use href="/icon.svg#beer" />
    </svg>
    Cheers
  </p>
);

const TalkItem = (): React.ReactElement => (
  <p className="flex items-center justify-end gap-4 px-6 py-3 text-6xl md:w-2/3">
    Talk to each other
    <svg className="w-12 h-12">
      <use href="/icon.svg#talk" />
    </svg>
  </p>
);

const MemberItem = ({ name }: { name: string }) => (
  <p className="flex items-center gap-4 px-6 py-3 text-base border-2 border-gray-300 border-dashed lg:px-8 lg:py-6 lg:text-2xl">
    {name}
  </p>
);

export const Information = (): React.ReactElement => {
  const [percent, setPercent] = React.useState<number>(0);
  const dRef = React.useRef<HTMLDivElement>(null);
  const members = [
    'Liem Pham',
    'Helen Vuong',
    'Rcv! Dang Tu',
    'Bingo',
    'Truong Nguyen',
    'Son Nguyen',
    'Nhan JAV',
    'Duy Nguyen',
  ];

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
      className="flex w-auto h-screen overflow-x-auto md:overflow-x-hidden font-permanent-marker"
      onWheel={onWheel}
      onScroll={onScroll}
      ref={dRef}
    >
      <ScrollBar percent={percent} />
      <Container>
        <p className="text-6xl">Weekly</p>
        <div className="flex flex-wrap gap-6">
          <div className="p-4 text-2xl text-white bg-red-600 rounded-md">Monday</div>
          <div className="p-4 text-2xl text-white rounded-md bg-fuchsia-600">Tuesday</div>
          <div className="p-4 text-2xl text-white rounded-md bg-violet-600">Wednesday</div>
          <div className="p-4 text-2xl text-white bg-blue-600 rounded-md">Thursday</div>
          <div className="p-4 text-2xl text-white rounded-md bg-cyan-600">Friday</div>
          <div className="p-4 text-2xl text-white bg-green-600 rounded-md">Saturday</div>
          <div className="p-4 text-2xl text-white rounded-md bg-amber-600">Sunday</div>
        </div>
      </Container>
      <Container>
        <p className="text-5xl">Restaurant</p>
        <div className="flex flex-wrap gap-6">
          <RestaurantItem icon="restaurant">Quế Linh</RestaurantItem>
          <RestaurantItem icon="address">Address: 1450 Trường Sa, P. 3</RestaurantItem>
          <RestaurantItem icon="phone">0909 482 988</RestaurantItem>
          <RestaurantItem icon="time">09h00` - 23h00`</RestaurantItem>
          <RestaurantItem icon="price">45.000₫ → 275.000₫</RestaurantItem>
        </div>
      </Container>
      <Container>
        <BeerItem />
        <p className="py-4 text-4xl md:w-1/4">&</p>
        <TalkItem />
      </Container>
      <Container>
        <p className="text-5xl">Team</p>
        <div className="flex flex-wrap gap-6">
          {members.map((member, index) => (
            <MemberItem key={index} name={member} />
          ))}
        </div>
      </Container>
    </div>
  );
};
