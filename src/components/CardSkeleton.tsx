const CardSkeleton = () => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg transition-shadow duration-200">
      <div className="animate-pulse">
        <div className="bg-slate-500 sm:rounded-t-lg w-full h-36"></div>
        <div className="p-2">
          <div className="h-4 bg-slate-500 rounded my-2"></div>
          <div className="h-4 bg-slate-500 rounded my-2"></div>
          <div className="h-4 bg-slate-500 rounded my-2"></div>
          <div className="h-4 bg-slate-500 rounded my-2 w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
