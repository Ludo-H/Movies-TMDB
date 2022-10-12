import React from 'react';

type Props = {
    setTvSeries: () => void,
    setAnimes: () => void,
    setMovies: () => void
}

const NavTypesMovies: React.FC<Props> = (props) => {
    return (
        <nav className='nav-types-movies'>
            <li onClick={() => props.setTvSeries()}>TV Series</li>
            <li onClick={() => props.setMovies()}>Movies</li>
            <li onClick={() => props.setAnimes()}>Animes</li>
        </nav>
    );
};

export default NavTypesMovies;