import React, { useState } from 'react';

interface BelongsToCollection {
    id: number;
    name: string;
    poster_path?: any;
    backdrop_path: string;
};

interface Genre {
    id: number;
    name: string;
};

interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
};

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
};

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
};

type Items = {
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
};

// type FavoritesContext = {
//     items: Items[],
//     addItem: (item: Items) => void,
//     removeItem: (id: string) => void
// };

type FavoritesContext = {
    items: Items[],
    updateItem: (item: Items) => void
};

type Props = {
    children?: React.ReactNode
}



// const FavoritesContext= React.createContext<FavoritesContext>({
//     items: [],
//     addItem: (item: Items) => {},
//     removeItem: (id: string) => {}
// });

export const FavoritesContext = React.createContext<FavoritesContext>({
    items: [],
    updateItem: (item: Items) => { }
});


const FavoritesProvider: React.FC<Props> = (props) => {

    let localStor: Items[] = []

    let getLS = localStorage.getItem("Favorites Items");

    if(getLS !== null) {
        localStor = JSON.parse(getLS)
    }
    
    const [favoritesItems, setFavoritesItems] = useState<Items[]>(localStor)


    const updateItemFromFavoritesItems = async (item: Items) => {

        // if (getLS !== null) {
        //     localStor = JSON.parse(getLS)

            const foundProduct = localStor.find(film => film.id === item.id);
    
            let updatedItems: Items[] = localStor;

            // setFavoritesItems(updatedItems);

            if (foundProduct) {

                updatedItems = localStor.filter((item) => item.id !== foundProduct.id);
                localStorage.setItem("Favorites Items", JSON.stringify(updatedItems));
                console.log(updatedItems);
                setFavoritesItems(updatedItems);
                // console.log(favoritesItems);


            } else{
                localStor.push(item);
                localStorage.setItem("Favorites Items", JSON.stringify(localStor));
                console.log(localStor)
                setFavoritesItems(localStor)
                // console.log(favoritesItems);

            }

        // } else {
        //     localStorage.setItem("Favorites Items", JSON.stringify(localStor))
        // }

    };

    // const favoritesContext = {
    //     items: favoritesItems,
    //     addItem: addItemToFavoritesItems,
    //     removeItem: removeItemFromFavoritesItems
    // };

    const favoritesContext = {
        items: favoritesItems,
        updateItem: updateItemFromFavoritesItems
    };

    return (
        <FavoritesContext.Provider value={favoritesContext}>
            {props.children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;