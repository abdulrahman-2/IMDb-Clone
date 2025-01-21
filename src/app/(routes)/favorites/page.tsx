"use client";

import LoadingSkeleton from "@/components/LoadingSkeleton";
import { MediaList } from "@/type";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { lazy, Suspense, useEffect, useState } from "react";

const Results = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(
    () => import("@/components/Results")
  )
);

const Favorites = () => {
  const [results, setResults] = useState<MediaList | null>(null);
  const { isSignedIn, user, isLoaded } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/user/getFav", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          setResults(data.favs);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (isLoaded && isSignedIn && user) {
      fetchData();
    }
  }, [isLoaded, isSignedIn, user]);

  if (!isSignedIn) {
    return (
      <div className="min-h-[calc(100vh-240px)] flex flex-col items-center justify-center text-center my-10">
        <h1 className="text-xl font-semibold my-5">
          Please sign in to view your favorites
        </h1>
        <Link
          href="/sign-in"
          className="px-4 py-1 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-200px)]">
      <div className="container">
        <h1 className="pl-3 sm:pl-0 my-5 text-white text-2xl md:text-3xl font-bold">
          My Favorites 🤍
        </h1>
      </div>

      {!results ||
        (results.length === 0 && (
          <h1 className="text-center pt-6">No results found</h1>
        ))}
      {results && results.length !== 0 && (
        <Suspense fallback={<LoadingSkeleton length={results.length} />}>
          <Results
            results={results.map((result: any) => ({
              ...result,
              id: result.movieId,
              title: result.title,
              backdrop_path: result.image,
              overview: result.description,
              first_air_date: result.dateReleased.substring(0, 10),
              vote_count: result.rating,
            }))}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Favorites;
