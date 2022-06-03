export const ScrollBar = (props: { percent: number }): React.ReactElement => {
  return (
    <div className="fixed left-0 w-full px-12 top-4">
      <div className="flex items-center justify-end w-full">
        <svg
          className="w-10 h-10"
          style={{ color: ['#dc2626', '#c026d3', '#7c3aed', '#2563eb', '#0891b2'][Math.round(props.percent / 25)] }}
        >
          <use href="/icon.svg#flight" />
        </svg>
        <div
          className="h-0.5"
          style={{
            width: `calc(${props.percent}% - 2.5rem)`,
            backgroundImage: 'linear-gradient(90deg, #0891b2 0%, #2563eb 25%, #7c3aed 50%, #c026d3 75%, #dc2626 100%)',
          }}
        />
      </div>
    </div>
  );
};
