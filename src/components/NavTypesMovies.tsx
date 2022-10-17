import React, { useState } from 'react';

type Props = {
    setTvSeries: () => void,
    setMovies: () => void
}

const NavTypesMovies: React.FC<Props> = (props) => {

    const [active, setActive] = useState({
        tvSeries: false,
        movies: true
    })

    return (
        <nav className='nav-types-movies'>
            <ul>
                <li className={active.tvSeries ? 'active' : ''} onClick={() => {
                    props.setTvSeries();
                    setActive({
                        tvSeries: true,
                        movies: false
                    })
                }}>
                    TV Series
                </li>
                <li className={active.movies ? 'active' : ''} onClick={() => {
                    props.setMovies();
                    setActive({
                        tvSeries: false,
                        movies: true
                    })
                }}>
                    Movies
                </li>
            </ul>
        </nav>
    );
};

export default NavTypesMovies;