import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavTypesMovies from '../NavTypesMovies';

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

const CenterHome = () => {

    const [popularMovies, setPopularMovies] = useState<popularMovies[]>();

    useEffect(() => {
        const fetchPopularMovies = async ()=>{
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&sort_by=popularity.desc`);
                console.log(data.data.results);
                setPopularMovies(data.data.results);
    
            } catch (error) {
                console.log(error)
            }
        }
        fetchPopularMovies();
    }, [])
    
    
    

    return (
        <div>
            <NavTypesMovies/>
            {popularMovies && popularMovies.map((movie)=>{
                return(
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
                    </div>
                )
            })}
        </div>
    );
};

export default CenterHome;



