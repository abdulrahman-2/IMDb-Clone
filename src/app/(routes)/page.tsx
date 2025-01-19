import Pagination from "@/components/Pagination";
import Results from "@/components/Results";
import { HomeProps } from "@/type";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }: HomeProps) => {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams?.page || "1";

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  const totalPages = data.total_pages;

  return (
    <div>
      <Results results={results} />
      <Pagination currentPage={parseInt(page, 10)} totalPages={totalPages} />
    </div>
  );
};

export default Home;
