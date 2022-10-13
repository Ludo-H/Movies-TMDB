import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularAnime from './PopularAnime';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

type popularAnimes = {
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

const PopularAnimes = () => {

    const [popularAnimes, setPopularAnimes] = useState<popularAnimes[]>();

    useEffect(() => {
        const fetchPopularAnimes = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&with_genres=16&sort_by=vote_count.desc`);
                setPopularAnimes(data.data.results);

            } catch (error) {
                console.log(error)
            }
        }
        fetchPopularAnimes();
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
            {popularAnimes && popularAnimes.map((anime) => {
                return (
                    <PopularAnime key={anime.id} anime={anime} />
                )
            })}
        </Carousel>
    );
};

export default PopularAnimes;