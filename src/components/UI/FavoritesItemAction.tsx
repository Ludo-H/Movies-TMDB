import React, { useContext } from 'react';
import { FavoritesContext } from '../../store/FavoritesProvider';


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
    name: String;
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

type Props = {
    item: RootObject
};

const FavoritesItemAction: React.FC<Props> = (props) => {

    const favoritesContext = useContext(FavoritesContext)

    const test = ()=>{
        // console.log(favoritesContext);
        favoritesContext.updateItem(props.item);
        // console.log(favoritesContext);

    }

    return (
            <i className="fa-solid fa-heart" onClick={test}>

            </i>
    );
};

export default FavoritesItemAction;