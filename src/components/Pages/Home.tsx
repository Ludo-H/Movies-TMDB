import React, { useState } from 'react';
import CenterHome from '../centerHome/CenterHome';
import LeftSideBar from '../LeftSideBar';
import RightSideBar from '../RightSideBar';
import TypeClickedContext from "../../store/typeClicked-context";


const Home = () => {

    const [typeClicked, setTypeClicked] = useState('movies');

    const contextValue = {
        type: typeClicked,
        updateType: setTypeClicked
      }

    return (
        <TypeClickedContext.Provider value={contextValue}>
        <div className='home__container'>
            <LeftSideBar/>
            <CenterHome/>
            <RightSideBar/>
        </div>
        </TypeClickedContext.Provider>
    );
};

export default Home;