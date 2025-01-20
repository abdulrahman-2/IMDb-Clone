const API_KEY = process.env.API_KEY;

export const getMovies = async (
  page: number = 1,
  search?: string,
  genre: string = "trending/all/week"
): Promise<{ results: any[]; total_pages: number }> => {
  try {
    const url = search
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=${page}&include_adult=false`
      : `https://api.themoviedb.org/3/${genre}?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getSingleMovie = async (movieId: number): Promise<any> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch movie data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
};
