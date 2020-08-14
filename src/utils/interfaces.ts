
export interface IGenre {
    name: string;
    id: number;
}

export interface IResponseGenre {
    genres: IGenre[];
}
interface IMovieTrending {
    id: number;
    title: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
    overview: string;
    poster_path: string;
    backdrop_path: string;
}

export interface IResponseMovieTrending {
    page: number;
    results: IMovieTrending[];
    total_pages: number;
    total_results: number;
}

interface IMoviePopular extends IMovieTrending {
    popularity: number;
    vote_count: number;
}

export interface IResponseMoviePopular extends IResponseMovieTrending {
    results: IMoviePopular[];
}