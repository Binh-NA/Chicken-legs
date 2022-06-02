import { get } from 'fetcher';
import { Slogan } from './interface';

const urls = {
  slogans: '/api/slogan',
};

export const getSlogans = async () => {
  return get<Slogan[]>(urls.slogans);
};
