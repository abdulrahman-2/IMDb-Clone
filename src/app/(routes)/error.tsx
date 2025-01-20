"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-700 mb-4">{error.message}</p>
        <button
          className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
