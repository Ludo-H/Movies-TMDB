import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LeftSideBar from '../LeftSideBar';
import Button from '../UI/Button';

// changer classe container !!!!!

export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path?: any;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface RootObject {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

const Item = () => {

    const [itemClicked, setItemClicked] = useState<RootObject>();
    const [displayVideo, setDisplayVideo] = useState(false);
    console.log(itemClicked);

    const [keyVideo, setKeyVideo] = useState<String>();

    let { id, type } = useParams();

    useEffect(() => {
        const fetchItemClicked = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`);
                setItemClicked(data.data);

            } catch (error) {
                console.log(error)
            }
        }
        fetchItemClicked();
    }, [id, type])


    useEffect(() => {

        const fetchPathVideo = async ()=>{
            try {
                const pathData = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY_TMDB}&append_to_response=videos`);

                setKeyVideo(pathData.data.results[0].key);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchPathVideo();
      
    }, [])
    


    return (
        <div className='home__container'>
            <LeftSideBar />
            <div>
                <h3>{itemClicked?.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w400/${itemClicked?.poster_path}`} alt="poster" />
                <p>{itemClicked?.overview}</p>
                {itemClicked?.genres.map((genre) => {
                    return (
                        <p key={genre.id}>{genre.name}</p>
                    )
                })}
                <i className="fa-solid fa-heart"></i>
                <Button onClick={() => setDisplayVideo(true)}>
                    <span>Watch</span>
                </Button>
                {displayVideo && 
                <iframe
                    width="500"
                    height="300"
                    src={`https://www.youtube.com/embed/${keyVideo}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={itemClicked?.title}
                />}
            </div>
        </div>
    );
};

export default Item;