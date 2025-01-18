import { MediaItem } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }: { result: MediaItem }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/${result.media_type}/${result.id}`}>
        <Image
          src={
            result.backdrop_path || result.poster_path
              ? `https://image.tmdb.org/t/p/original/${
                  result.backdrop_path || result.poster_path
                }`
              : "/fallback-image.jpg"
          }
          alt={result.title || result.name || "movie poster"}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full sm:h-36 object-cover"
          unoptimized
        />
        <div className="p-2">
          <p className="line-clamp-3 text-sm">
            {result.overview || "No description available."}
          </p>
          <h2 className="font-bold truncate my-2 text-sm">
            {result.title || result.name || "Untitled"}
          </h2>
          <p className="flex items-center text-xs">
            {result.release_date ||
              result.first_air_date ||
              "Unknown release date"}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
