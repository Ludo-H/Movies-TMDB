import { useState } from 'react';
import NavTypesMovies from '../NavTypesMovies';
import Movies from './movies/Movies';
import Series from './tvSeries/Series';

const CenterHome = () => {

    const [tvSeries, setTvSeries] = useState(false);
    const [movies, setMovies] = useState(true);

    const moviesHandler = ()=>{
        setMovies(true);
        setTvSeries(false);
    }


    const tvSeriesHandler = ()=>{
        setMovies(false);
        setTvSeries(true);
    }
    
    return (
        <div className='center-home'>
            <NavTypesMovies setTvSeries={tvSeriesHandler} setMovies={moviesHandler}/>
            <p>Les plus votés</p>
            {tvSeries && <Series/>}
            {movies && <Movies/>}
        </div>
    );
};

export default CenterHome;



