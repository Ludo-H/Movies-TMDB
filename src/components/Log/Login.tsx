import React, { FormEvent, Fragment, useRef, useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../utils/firebase.config';
import Input from '../UI/Input';
import bcrypt from "bcryptjs";

const Login = () => {

    // State message erreur
    /***************************************************************/
    const [error, setError] = useState(false);
    /***************************************************************/


    // Selections des inputs avec useRef
    /***************************************************************/
    const loginEmail = useRef<HTMLInputElement>(null);
    const loginPassword = useRef<HTMLInputElement>(null);
    /***************************************************************/


     // Logique de connexion
    /***************************************************************/
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        // On récupère les données hasher du LS
        const email = loginEmail.current!.value;
        const password = loginPassword.current!.value;

        const getHashedEmail = JSON.parse(localStorage.getItem('login')!).hashedEmail;
        const getHashedPassword = JSON.parse(localStorage.getItem('login')!).hashedPassword;

        bcrypt.compare(email, getHashedEmail, (err: Error, isMatch: boolean) => {
            if(err){
                console.log(err);
            } else if(!isMatch){
                console.log("mail incorrect")
            }else{
                console.log('mail Correct');
            }
        })

        bcrypt.compare(password, getHashedPassword, (err: Error, isMatch: boolean) => {
            if(err){
                console.log(err);
            } else if(!isMatch){
                console.log("MDP incorrect")
            }else{
                console.log('MDP Correct');
            }
        })


        // try {
        //     await signInWithEmailAndPassword(auth, loginEmail.current!.value, loginPassword.current!.value);
                    
        //     // on envoie sur la page home

        //     window.location.href = '/home';
             
        // } catch (error) {
        //     console.log(error);
        //     setError(true);
        // }
    }
    /***************************************************************/


    return (
         <Fragment>
            <form onSubmit={handleLogin} className='form'>
                <Input
                    input={{type : "email", placeholder : 'Email', required: true}}
                    ref={loginEmail}
                    
                />
                <Input
                    input={{type : "password", placeholder : 'Mot de passe', required: true}}
                    ref={loginPassword}
                />
                <Input input={{type : "submit", value : 'Se connecter'}} />
                <span>{error && "Email ou mot de passe incorrect(s)"}</span>
            </form>
        </Fragment>
    );
};

export default Login;