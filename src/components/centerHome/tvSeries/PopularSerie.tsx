import React from 'react';

type popularSerie = {
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
    serie: popularSerie,
}

const PopularSerie: React.FC<Props> = (props) => {
    return (
        <div className='popular-item'>
            <img src={`https://image.tmdb.org/t/p/w400/${props.serie.poster_path}`} alt="serie poster" />
        </div>
    );
};

export default PopularSerie;