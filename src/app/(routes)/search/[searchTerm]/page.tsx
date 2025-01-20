import Results from "@/components/Results";
import { getMovies } from "@/lib/api/api";
import React from "react";

const page = async ({ params }: any) => {
  const { searchTerm } = await params;
  const res = await getMovies(1, searchTerm, "search/movie");
  const { results } = res;
  return (
    <div>
      {!results ||
        (results.length === 0 && (
          <h1 className="text-2xl min-h-[calc(100vh-180px)] font-semibold flex items-center justify-center pt-6">
            No results found
          </h1>
        ))}
      {results && results.length !== 0 && <Results results={results} />}
    </div>
  );
};

export default page;
