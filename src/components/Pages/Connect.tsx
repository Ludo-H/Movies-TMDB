import React, { Fragment, useState } from 'react';
import Loader from '../Loader';
import Login from '../Log/Login';
import SignUp from '../Log/SignUp';
import Button from '../UI/Button';

const Connect = () => {
    // state pour gérer l'affichage login/signup
    /***************************************************************/
    const [loginButton, setLoginButton] = useState(true)
    const [signUpButton, setSignUpButton] = useState(false)
    /***************************************************************/


    // Logique de la modale connexion
    /***************************************************************/
    const handleLogin = () => {
        setLoginButton(true);
        setSignUpButton(false);
    }
    /***************************************************************/


    // Logique de la modale s'inscrire
    /***************************************************************/
    const handleSignUp = () => {
        setSignUpButton(true);
        setLoginButton(false);
    }
    /***************************************************************/

    return (
        <Fragment>
            <Loader/>
            <div className='connect__container content'>
                <h1>Movies</h1>
                <div className='connect__container__buttons'>
                    <Button onClick={handleLogin}>
                        Se connecter
                    </Button>
                    <Button onClick={handleSignUp}>
                        S'inscrire
                    </Button>
                </div>
                <div className='connect__container__modal'>
                    {loginButton && <Login />}
                    {signUpButton && <SignUp />}
                </div>
            </div>
        </Fragment>
    );
};

export default Connect;