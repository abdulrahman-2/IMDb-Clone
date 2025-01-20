import Pagination from "@/components/Pagination";
import Results from "@/components/Results";
import CardSkeleton from "@/components/CardSkeleton";
import { Suspense } from "react";
import { HomeProps } from "@/type";
import { getMovies } from "@/lib/api/api";

const Home = async ({ searchParams }: HomeProps) => {
  const params = await searchParams;
  const page = params?.page || 1;

  const res = await getMovies(Number(page));

  const { results, total_pages: totalPages } = res;

  return (
    <div>
      <Suspense fallback={<LoadingSkeleton />}>
        <Results results={results} />
      </Suspense>
      <Pagination currentPage={Number(page)} totalPages={totalPages} />
    </div>
  );
};

function LoadingSkeleton() {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:gap-4 container pb-5">
      {Array.from({ length: 15 }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
}

export default Home;
