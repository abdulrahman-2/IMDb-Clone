import Pagination from "@/components/Pagination";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = searchParams.page || "1";

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;
  const totalPages = data.total_pages;

  return (
    <div>
      <Results results={results} />
      <Pagination currentPage={parseInt(page)} totalPages={totalPages} />
    </div>
  );
};

export default Home;
