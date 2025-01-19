"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

export default function AddToFav({
  movieId,
  title,
  image,
  overview,
  releaseDate,
  voteCount,
}: {
  movieId: string;
  title: string;
  image: string;
  overview: string;
  releaseDate: string;
  voteCount: string;
}) {
  const [isFav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    if (isLoaded && isSignedIn && user) {
      setIsFav((user.publicMetadata?.favs as string[])?.includes(movieId));
    }
    setIsLoading(false);
  }, [movieId, isLoaded, isSignedIn, user, user?.publicMetadata?.favs]);

  const handleFavClick = async () => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/user/fav", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId,
          title,
          overview,
          releaseDate,
          voteCount,
          image,
        }),
      });

      if (res.ok) {
        setIsFav(!isFav);
        toast.success(isFav ? "Removed from favorites" : "Added to favorites");
      } else {
        toast.error("Failed to update favorites");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleFavClick}
        className={`py-2 px-5 mx-auto flex items-center font-semibold rounded-md ${
          isFav ? "bg-red-300 dark:bg-red-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
        disabled={isLoading}
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        {isLoading
          ? "Loading..."
          : isFav
          ? "Remove from Favorites"
          : "Add to Favorites"}

        <FaHeart className="ml-2" />
      </button>
    </div>
  );
}
