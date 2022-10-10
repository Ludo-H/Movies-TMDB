import axios from 'axios';
import React from 'react';
import NavTypesMovies from '../NavTypesMovies';

const CenterHome = () => {

    
    const tryTest = async ()=>{
        try {
            const data = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7f0321762d318ddbe8df744bdf0c00ce&sort_by=popularity.desc');
            console.log(data);

        } catch (error) {
            console.log(error)
        }
    }
    tryTest();

    return (
        <div>
            <NavTypesMovies/>
        </div>
    );
};

export default CenterHome;



