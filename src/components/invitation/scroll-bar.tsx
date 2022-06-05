export const ScrollBar = (props: { percent: number }): React.ReactElement => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full px-0">
      <div className="flex items-center justify-between w-full">
        <div
          className="h-1 rounded-md"
          style={{
            width: `calc(${props.percent}%)`,
            backgroundImage:
              'linear-gradient(90deg, #2563eb 0%, #0284c7 10%, #0891b2 20%, #0d9488 30%, #059669 40%, #16a34a 50%, #65a30d 60%, #ca8a04 70%, #d97706 80%, #ea580c 90%, #dc2626 100%)',
          }}
        />
      </div>
    </div>
  );
};
