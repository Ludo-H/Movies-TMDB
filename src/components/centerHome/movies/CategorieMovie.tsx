import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import Card from '../../UI/Card';

type categorieMovie = {
    id: number;
    name: string;
}

type categorieData = {
    adult: boolean;
    backdrop_path?: any;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: any;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

type Props = {
    categorie: categorieMovie
}

const CategorieMovie: React.FC<Props> = (props) => {

    const [categorieData, setCategorieData] = useState<categorieData[]>();

    useEffect(() => {
        const fetchCategorieData = async () => {
            try {
                const data = await axios.get(`
                https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&sort_by=popularity.desc&with_genres=${props.categorie.id}`);
                setCategorieData(data.data.results);

            } catch (error) {
                console.log(error)
            }
        }
        fetchCategorieData();
    }, [props.categorie.id])


    return (
        <div>
            <p>{props.categorie.name}</p>
            <Carousel
                // className='testcarousel'
                width={850}
                showThumbs={false}
                showStatus={false}
                centerMode
                centerSlidePercentage={50}
                infiniteLoop
            >
                {categorieData && categorieData.map((movie) => {
                    return (
                        <Card key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="poster" />
                        </Card>
                    )
                })}
            </Carousel>
        </div>
    );
};

export default CategorieMovie;