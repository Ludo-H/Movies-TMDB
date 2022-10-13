import React, { useState } from 'react';

type Props = {
    setTvSeries: () => void,
    setAnimes: () => void,
    setMovies: () => void
}

const NavTypesMovies: React.FC<Props> = (props) => {

    const [active, setActive] = useState({
        tvSeries: false,
        movies: true,
        animes: false
    })

    return (
        <nav className='nav-types-movies'>
            <ul>
                <li className={active.tvSeries ? 'active' : ''} onClick={() => {
                    props.setTvSeries();
                    setActive({
                        tvSeries: true,
                        movies: false,
                        animes: false
                    })
                }}>
                    TV Series
                </li>
                <li className={active.movies ? 'active' : ''} onClick={() => {
                    props.setMovies();
                    setActive({
                        tvSeries: false,
                        movies: true,
                        animes: false
                    })
                }}>
                    Movies
                </li>
                <li className={active.animes ? 'active' : ''} onClick={() => {
                    props.setAnimes();
                    setActive({
                        tvSeries: false,
                        movies: false,
                        animes: true
                    })
                }}>
                    Animes
                </li>
            </ul>
        </nav>
    );
};

export default NavTypesMovies;