export const LetGo = (props: { onClick: () => void }): React.ReactElement => (
  <button
    className="block p-8 space-y-3 bg-white border-0 rounded-lg shadow-md cursor-pointer group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
    onClick={props.onClick}
  >
    <p className="text-slate-900 group-hover:text-white text-8xl font-permanent-marker">Let Go!</p>
  </button>
);
