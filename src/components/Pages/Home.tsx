import React from 'react';
import CenterHome from '../centerHome/CenterHome';
import LeftSideBar from '../LeftSideBar';
import RightSideBar from '../RightSideBar';

const Home = () => {
    return (
        <div className='home__container'>
            <LeftSideBar/>
            <CenterHome/>
            <RightSideBar/>
        </div>
    );
};

export default Home;