import Image from "next/image";

const page = () => {
  return (
    <div className="container px-3 sm:px-[2rem] py-10 min-h-[calc(100vh-64px)] flex flex-col gap-8 lg:flex-row items-center justify-between">
      <div className="w-auto lg:flex-1 mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold my-3">
            About IMDb Clone
          </h1>
          <div className="text-md max-w-[600px] flex flex-col gap-3">
            <p>
              Welcome to IMDb Clone! This app is designed to provide users with
              a comprehensive database of movies, TV shows, and entertainment
              content. Our goal is to offer a seamless and enjoyable experience
              for movie enthusiasts and casual viewers alike.
            </p>

            <p>
              On IMDb Clone, you&apos;ll find detailed information about your
              favorite movies and TV shows, including cast and crew details,
              plot summaries, user reviews, and ratings. We strive to keep our
              database up-to-date with the latest releases and trending content.
            </p>

            <p>
              This website is created using Next.js and{" "}
              <a
                href="https://go.clerk.com/fgJHKlt"
                target="_blank"
                className="text-teal-500 hover:underline"
              >
                Clerk
              </a>
              .
            </p>

            <p>
              We encourage you to rate and review the movies and shows you
              watch. Your feedback helps other users discover great content and
              enhances the overall community experience. Join us in celebrating
              the world of entertainment!
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative w-full h-[400px]">
        <Image
          src="/about.webp"
          alt="about"
          fill
          className="absolute rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default page;
