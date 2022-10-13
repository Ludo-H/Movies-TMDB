import React from 'react';

type popularMovie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

type Props = {
    movie: popularMovie,
}

const PopularMovie: React.FC<Props> = (props) => {
    return (
        <div className='popular-item'>
            <img src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`} alt="movie poster" />
        </div>
    );
};

export default PopularMovie;