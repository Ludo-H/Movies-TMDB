import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../UI/Card';

type mostVotedSerie = {
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
    serie: mostVotedSerie,
}

const MostVotedSerie: React.FC<Props> = (props) => {
    return (
        <NavLink to={`/tv/${props.serie.id}`}>
        <Card className='popular-item'>
            <img src={`https://image.tmdb.org/t/p/w400/${props.serie.poster_path}`} alt="serie poster" />
        </Card>
        </NavLink>
    );
};

export default MostVotedSerie;