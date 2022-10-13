import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularSerie from './PopularSerie';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';


type popularSeries = {
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

const PopularSeries = () => {

    const [popularSeries, setPopularSeries] = useState<popularSeries[]>();

    useEffect(() => {
        const fetchPopularSeries = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&sort_by=vote_count.desc`);
                setPopularSeries(data.data.results);

            } catch (error) {
                console.log(error)
            }
        }
        fetchPopularSeries();
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
            {popularSeries && popularSeries.map((serie) => {
                return (
                    <PopularSerie key={serie.id} serie={serie} />
                )
            })}
        </Carousel>
    );
};

export default PopularSeries;