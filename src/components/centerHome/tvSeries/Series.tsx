import React, { Fragment } from 'react';
import CategoriesSeries from './CategoriesSeries';
import MostVotedSeries from './MostVotedSeries';

const Series = () => {
    return (
        <Fragment>
            <MostVotedSeries/>
            <CategoriesSeries/>
        </Fragment>
    );
};

export default Series;