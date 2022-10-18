import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import CategorieSerie from './CategorieSerie';

type categorieSerie = {
    id: number;
    name: string;
}

const CategoriesSeries = () => {

    const [categoriesSeries, setCategoriesSeries] = useState<categorieSerie[]>();

    useEffect(() => {
        const fetchCategoriesSeries = async () => {
            try {
                const data = await axios.get(`
                https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`);
                setCategoriesSeries(data.data.genres);

            } catch (error) {
                console.log(error)
            }
        }
        fetchCategoriesSeries();
    }, [])

    return (
        <Fragment>
            {categoriesSeries && categoriesSeries.map((categorie)=>{
                return(
                    <CategorieSerie key={categorie.id} categorie={categorie}/>
                )
            })}
        </Fragment>
    );
};

export default CategoriesSeries;