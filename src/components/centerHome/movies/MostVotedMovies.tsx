import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MostVotedMovie from './MostVotedMovie';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

type mostVotedMovies = {
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

const MostVotedMovies = () => {

    const [mostVotedMovies, setMostVotedMovies] = useState<mostVotedMovies[]>();

    useEffect(() => {
        const fetchMostVotedMovies = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&sort_by=vote_count.desc`);
                setMostVotedMovies(data.data.results);

            } catch (error) {
                console.log(error)
            }
        }
        fetchMostVotedMovies();
    }, [])


    return (
        <Carousel
            className='testcarousel'
            width={650}
            showThumbs={false}
            showStatus={false}
            centerMode
            centerSlidePercentage={50}	
            infiniteLoop
        >
            {mostVotedMovies && mostVotedMovies.map((movie) => {
                return (
                    <MostVotedMovie key={movie.id} movie={movie} />
                )
            })}
        </Carousel>
    );
};

export default MostVotedMovies;