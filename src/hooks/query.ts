import React from 'react';

export const useQuery = <T>(api: Promise<T>, dependencies: unknown[]) => {
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    (async () => {
      const res = await api;
      setData(res);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return [data];
};
