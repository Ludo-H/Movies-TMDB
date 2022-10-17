import React, { Fragment } from 'react';
import CategoriesMovies from './CategoriesMovies';
import MostVotedMovies from './MostVotedMovies';

const Movies = () => {
    return (
        <Fragment>
            <MostVotedMovies/>
            <CategoriesMovies/>
        </Fragment>
    );
};

export default Movies;