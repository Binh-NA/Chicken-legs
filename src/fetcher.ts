import { Response } from 'interfaces/response';

const TIMEOUT = 5; // 5s

export const timeout = (time: number) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller;
};

export const get = async <T>(url: string, param?: RequestInit): Promise<Response<T>> => {
  try {
    const res = await fetch(url, {
      signal: timeout(TIMEOUT).signal,
      ...param,
    });

    if (res.ok) {
      const data = (await res.json()) as Response<T>;
      return data;
    }

    return {
      success: false,
      data: null,
      message: 'server error!',
    };
  } catch (err: unknown) {
    return {
      success: false,
      data: null,
      message: (err as Error).message,
    };
  }
};
