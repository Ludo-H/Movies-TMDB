import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../utils/firebase.config';

const LeftSideBar = () => {

    const handleLogout = async () => {
        await signOut(auth);
        window.location.href = '/';
    }

    return (
        <div>
            <div className='logo'>
                <i className="fa-solid fa-clapperboard"></i>
                <h2>Movies</h2>
            </div>
            <nav>
                <ul>
                    <h3>Menu</h3>
                    <div className='leftSideBar-item'>
                        <i className="fa-solid fa-house"></i>
                        <NavLink to='/home'>Home</NavLink>
                    </div>
                    <div className='leftSideBar-item'>
                        <i className="fa-solid fa-hourglass-end"></i>
                        <NavLink to='/comingsoon'>Coming soon</NavLink>
                    </div>
                    <div className='leftSideBar-item'>
                        <i className="fa-solid fa-star"></i>
                        <NavLink to='/favorites'>Favorites</NavLink>
                    </div>
                    <h3>General</h3>
                    <div className='leftSideBar-item'>
                        <i className="fa-solid fa-gear"></i>
                        <NavLink to='/settings'>Settings</NavLink>
                    </div>
                    <div className='leftSideBar-item'>
                        <i onClick={handleLogout} className="fa-solid fa-right-from-bracket">Logout</i>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default LeftSideBar;