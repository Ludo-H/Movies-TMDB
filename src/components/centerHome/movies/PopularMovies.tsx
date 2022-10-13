import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularMovie from './PopularMovie';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

type popularMovies = {
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

const PopularMovies = () => {

    const [popularMovies, setPopularMovies] = useState<popularMovies[]>();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&sort_by=vote_count.desc`);
                setPopularMovies(data.data.results);

            } catch (error) {
                console.log(error)
            }
        }
        fetchPopularMovies();
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
            {popularMovies && popularMovies.map((movie) => {
                return (
                    <PopularMovie key={movie.id} movie={movie} />
                )
            })}
        </Carousel>
    );
};

export default PopularMovies;