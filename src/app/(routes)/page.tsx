import Pagination from "@/components/Pagination";
import { lazy, Suspense } from "react";
import { HomeProps } from "@/type";
import { getMovies } from "@/lib/api/api";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const Results = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(
    () => import("@/components/Results")
  )
);

const Home = async ({ searchParams }: HomeProps) => {
  const params = await searchParams;
  const page = params?.page || 1;

  const res = await getMovies(Number(page));

  const { results, total_pages: totalPages } = res;

  return (
    <div>
      <Suspense fallback={<LoadingSkeleton length={15} />}>
        <Results results={results} />
      </Suspense>
      <Pagination currentPage={Number(page)} totalPages={totalPages} />
    </div>
  );
};

export default Home;
