import Link from 'next/link';

export const LetGo = (): React.ReactElement => (
  <Link href="/information">
    <a className="group block rounded-lg p-8 bg-white ring-1 ring-slate-900/5 shadow-md space-y-3 hover:bg-sky-500 hover:ring-sky-500 cursor-pointer border-0">
      <p className="text-slate-900 group-hover:text-white text-8xl font-permanent-marker">Let Go!</p>
    </a>
  </Link>
);
