import React from "react";
import CardSkeleton from "./CardSkeleton";

const LoadingSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:gap-4 container pb-5">
      {Array.from({ length: length }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
