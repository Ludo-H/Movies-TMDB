import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import CategorieMovie from './CategorieMovie';

type categorieMovie = {
        id: number;
        name: string;
}

const CategoriesMovies = () => {

    const [categoriesMovies, setCategoriesMovies] = useState<categorieMovie[]>();

    useEffect(() => {
        const fetchCategoriesMovies = async () => {
            try {
                const data = await axios.get(`
                https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`);
                setCategoriesMovies(data.data.genres);

            } catch (error) {
                console.log(error)
            }
        }
        fetchCategoriesMovies();
    }, [])

    return (
        <Fragment>
            {categoriesMovies && categoriesMovies.map((categorie)=>{
                return(
                    <CategorieMovie key={categorie.id} categorie={categorie}/>
                )
            })}
        </Fragment>
    );
};

export default CategoriesMovies;