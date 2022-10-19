import React, { useContext } from 'react';
import { FavoritesContext } from '../../store/FavoritesProvider';
import LeftSideBar from '../LeftSideBar';

// changer classe container !!!!!


const ComingSoon = () => {

    const favoritesContext = useContext(FavoritesContext);

    console.log(favoritesContext)

    return (
        <div className='home__container'>
            <LeftSideBar/>
            {favoritesContext.items.map((item)=>{
                return(
                    <img src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`} alt="poster" />
                )
            })}
        </div>
    );
};

export default ComingSoon;