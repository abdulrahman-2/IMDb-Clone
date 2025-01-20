import AddToFav from "@/components/AddToFav";
import { getSingleMovie } from "@/lib/api/api";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export const generateMetadata = async ({ params }: any) => {
  const { id: movieId } = await params;
  const movie = await getSingleMovie(Number(movieId));
  if (!movie) return {};
  return {
    title: movie.title,
    description: movie.overview,
  };
};

export default async function MoviePage({ params }: any) {
  const { id: movieId } = await params;

  const movie = await getSingleMovie(Number(movieId));

  if (!movie) {
    return (
      <div className="min-h-[calc(100vh-220px)] grid place-content-center text-center mt-10">
        <h1 className="text-xl font-semibold my-5">
          Movie details are not available at the moment!
        </h1>
        <p>
          <Link
            href="/"
            className="hover:text-amber-600 flex items-center justify-center gap-1"
          >
            <BiArrowBack />
            Go Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="min-h-[calc(100vh-220px)] pb-5 flex flex-col content-center container md:space-x-6">
        <div className="relative h-[270px] sm:h-[600px] w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title || "Movie Poster"}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="mt-7 p-2 text-center">
          <h2 className="text-xl mb-3 font-bold">
            {movie.title || "Untitled"}
          </h2>
          <p className="text-lg mb-3">
            {movie.overview || "No overview available."}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || "Unknown"}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count || "No ratings"}
          </p>
          <AddToFav
            movieId={movieId}
            title={movie.title || "Untitled"}
            image={movie.backdrop_path || movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date || ""}
            voteCount={movie.vote_count || 0}
          />
        </div>
      </div>
    </div>
  );
}
