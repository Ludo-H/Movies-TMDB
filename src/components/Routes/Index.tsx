import React from 'react';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Connect from '../Pages/Connect';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import Favorites from '../Pages/Favorites';
import ComingSoon from '../Pages/ComingSoon';
import Settings from '../Pages/Settings';
import Item from '../Pages/Item';

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Connect/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/favorites' element={<Favorites/>} />
                <Route path='/:type/:id' element={<Item/>} />
                {/* <Route path='/profile' element={<Profil/>} /> */}
                <Route path='/comingsoon' element={<ComingSoon/>} />
                <Route path='/settings' element={<Settings/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </Router>
    );
};

export default Index;