import Image from "next/image";
import Link from "next/link";

export default async function MoviePage({ params }: any) {
  const { id: movieId } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  if (!res.ok) {
    return (
      <div className="min-h-[calc(100vh-128px)] grid place-content-center text-center mt-10">
        <h1 className="text-xl my-5">
          Movie details are not available at the moment!
        </h1>
        {/* return home */}
        <p>
          <Link href="/" className="hover:text-amber-600">
            Go Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="min-h-[calc(100vh-128px)] pt-8 flex flex-col content-center container md:space-x-6">
        <div className="relative h-[300px] sm:h-[600px] w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title || movie.name}
            fill
            className="rounded-lg object-cover"
          ></Image>
        </div>

        <div className="mt-7 p-2 text-center">
          <h2 className="text-xl mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
          {/* <AddToFav
            movieId={movieId}
            title={movie.title || movie.name}
            image={movie.backdrop_path || movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date || movie.first_air_date}
            voteCount={movie.vote_count}
          /> */}
        </div>
      </div>
    </div>
  );
}
