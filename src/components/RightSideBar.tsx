import React, { useContext, useEffect, useState } from 'react';
import Input from './UI/Input';
import TypeClickedContext from "../store/typeClicked-context";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

type moviesOrSeries = {
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
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


const RightSideBar = () => {

    const [moviesOrSeries, setMoviesOrSeries] = useState<moviesOrSeries[]>()

    const typeClickedContext = useContext(TypeClickedContext);

    useEffect(() => {
        const fetchMoviesOrSeries = async () =>{
            try {
                if(typeClickedContext.type === "movies"){
                    const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&sort_by=popularity.desc`);
                    const dataToDisplay: [moviesOrSeries] = data.data.results.slice(0,5);
                    setMoviesOrSeries(dataToDisplay);
                }else{
                    const data = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&sort_by=popularity.desc`);
                    const dataToDisplay: [moviesOrSeries] = data.data.results.slice(0,5);
                    setMoviesOrSeries(dataToDisplay);
                }                
            } catch (error) {
                console.log(error);
            }
        }
        fetchMoviesOrSeries();
      
    }, [typeClickedContext.type])
    

    return (
        <div className='right-side-bar'>
            <Input input={{type: 'search', placeholder: 'Search'}}/>
            <div className='popular__list'>
                <h3>Popular {typeClickedContext.type}</h3>
                {moviesOrSeries && moviesOrSeries.map((popularItem)=>{
                    return (
                        <NavLink key={popularItem.id} to={`/${typeClickedContext.type === 'movies' ? 'movie' : 'tv'}/${popularItem.id}`} >
                        <div key={popularItem.id} className='popular__list__item'>
                            <p>{popularItem.title || popularItem.name}</p>
                            <img src={`https://image.tmdb.org/t/p/w400/${popularItem.poster_path}`} alt="poster" />
                        </div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    );
};

export default RightSideBar;