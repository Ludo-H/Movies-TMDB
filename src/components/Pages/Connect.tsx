import React, { Fragment, useState } from 'react';
import Loader from '../Loader';
import Login from '../Log/Login';
import SignUp from '../Log/SignUp';
import Button from '../UI/Button';

const Connect = () => {
    // state pour gérer l'affichage login/signup
    /***************************************************************/
    const [isLogin, setIsLogin] = useState(true)
    /***************************************************************/


    // Logique de la modale connexion
    /***************************************************************/
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };
    /***************************************************************/

    return (
        <Fragment>
            <Loader/>
            <div className='connect__container content'>
                <h1>Movies</h1>
                <div className='connect__container__buttons'>
                    <Button onClick={switchAuthModeHandler}>
                        Se connecter
                    </Button>
                    <Button onClick={switchAuthModeHandler}>
                        S'inscrire
                    </Button>
                </div>
                <div className='connect__container__modal'>
                    {isLogin ? <Login/> : <SignUp/>}
                </div>
            </div>
        </Fragment>
    );
};

export default Connect;