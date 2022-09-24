export type Error = {
	show: boolean;
	message: string;
}

export type MovieDetailsResponse = {
	Response: boolean;
	Search: MovieDetails;
	totalResults: string;
}

export type MovieListResponse = {
	Response: boolean;
	Search: MovieType[];
	totalResults: string;
}

export type ErrorResponse = {
	Response: boolean;
	Error: string;
}

export type MovieType = {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export type MovieDetails = {
	Actors: string;
	Awards: string;
	Country: string;
	Director: string;
	Genre: string;
	Language: string;
	Metascore: string;
	Plot: string;
	Poster: string;
	Production: string;
	Rated: string;
	Ratings: Rating[];
	Released: string;
	Runtime: string;
	Title: string;
	Type: string;
	Website: string;
	Writer: string;
	Year: string;
	imdbID: string;
	imdbRating: string;
	imdbVotes: string;
}

export type Rating = {
	Source: string;
	Value: string;
}


