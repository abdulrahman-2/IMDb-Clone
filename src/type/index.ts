type MediaType = "movie" | "tv";

export interface MediaItem {
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
}

export type MediaList = MediaItem[];

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export interface HomeProps {
  searchParams: any;
}

export interface UserFavorites {
  movieId: string;
  title: string;
  description: string;
  dateReleased: Date;
  rating: number;
  image: string;
}
