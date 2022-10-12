import { useState } from 'react';
import NavTypesMovies from '../NavTypesMovies';
import PopularAnimes from './animes/PopularAnimes';
import PopularMovies from './movies/PopularMovies';
import PopularSeries from './tvSeries/PopularSeries';

const CenterHome = () => {

    const [tvSeries, setTvSeries] = useState(false);
    const [movies, setMovies] = useState(true);
    const [animes, setAnimes] = useState(false);

    const moviesHandler = ()=>{
        setMovies(true);
        setAnimes(false);
        setTvSeries(false);
    }

    const animesHandler = ()=>{
        setMovies(false);
        setAnimes(true);
        setTvSeries(false);
    }

    const tvSeriesHandler = ()=>{
        setMovies(false);
        setAnimes(false);
        setTvSeries(true);
    }
    
    return (
        <div className='center-home'>
            <NavTypesMovies setTvSeries={tvSeriesHandler} setAnimes={animesHandler} setMovies={moviesHandler}/>
            {tvSeries && <PopularSeries/>}
            {movies && <PopularMovies/>}
            {animes && <PopularAnimes/>}   
        </div>
    );
};

export default CenterHome;



