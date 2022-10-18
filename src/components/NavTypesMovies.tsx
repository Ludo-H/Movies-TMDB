import React, { useContext, useState } from 'react';
import TypeClickedContext from "../store/typeClicked-context";

type Props = {
    setTvSeries: () => void,
    setMovies: () => void
}

const NavTypesMovies: React.FC<Props> = (props) => {

    const [active, setActive] = useState({
        tvSeries: false,
        movies: true
    })

    const typeClickedContext = useContext(TypeClickedContext);

    return (
        <nav className='nav-types-movies'>
            <ul>
                <li className={active.tvSeries ? 'active' : ''} onClick={() => {
                    props.setTvSeries();
                    setActive({
                        tvSeries: true,
                        movies: false
                    });

                    typeClickedContext.updateType('series');
                }}>
                    TV Series
                </li>
                <li className={active.movies ? 'active' : ''} onClick={() => {
                    props.setMovies();
                    setActive({
                        tvSeries: false,
                        movies: true
                    })

                    typeClickedContext.updateType('movies');
                }}>
                    Movies
                </li>
            </ul>
        </nav>
    );
};

export default NavTypesMovies;