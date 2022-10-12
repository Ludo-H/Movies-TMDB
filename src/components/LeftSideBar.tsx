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
        <div className='left-side-bar'>
            <div className='left-side-bar__logo'>
                <i className="fa-solid fa-clapperboard"></i>
                <h2>Movies</h2>
            </div>
            <nav>
                <ul>
                    <h3>Menu</h3>
                    <li className='left-side-bar__item'>
                        <NavLink to='/home'>Home</NavLink>
                        <i className="fa-solid fa-house"></i>
                        <div/>
                    </li>
                    <li className='left-side-bar__item'>
                        <NavLink to='/comingsoon'>Coming soon</NavLink>
                        <i className="fa-solid fa-hourglass-end"></i>
                        <div/>
                    </li>
                    <li className='left-side-bar__item'>
                        <NavLink to='/favorites'>Favorites</NavLink>
                        <i className="fa-solid fa-star"></i>
                        <div/>
                    </li>
                    <h3>General</h3>
                    <li className='left-side-bar__item'>
                        <NavLink to='/settings'>Settings</NavLink>
                        <i className="fa-solid fa-gear"></i>
                        <div/>
                    </li>
                    <li className='left-side-bar__item'>
                        <i onClick={handleLogout} className="fa-solid fa-right-from-bracket">Logout</i>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LeftSideBar;