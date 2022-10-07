import React, { FormEvent, Fragment, useRef, useState } from 'react';
import { auth } from '../../utils/firebase.config';
import Input from '../UI/Input';

const SignUp = () => {
    // State pour récupérer le pseudo 
    // State message d"erreur
    /***************************************************************/
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState(false)
    /***************************************************************/


    // Selections des inputs avec useRef
    /***************************************************************/
    const registerEmail = useRef<HTMLInputElement>(null);
    const registerPassword = useRef<HTMLInputElement>(null);
    /***************************************************************/


    // Logique d'inscription
    /***************************************************************/
    const handleRegister = async (e : FormEvent) => {
        e.preventDefault();

        try {
            auth.createUserWithEmailAndPassword(registerEmail.current!.value, registerPassword.current!.value)
                .then(async (userAuth) => {
                    await userAuth.user!.updateProfile({
                        displayName: displayName
                    })
                    // on refraichi pour avoir le pseudo à la connexion (sinon displayname reste null dans firebase)
                    // window.location.reload()
                    
                })
                .catch((error)=>{
                    console.log(error);
                    setError(true);
                })
        } catch (error) {
            console.log(error);
        }
    }
    /***************************************************************/

    return (
        <Fragment>
            <form onSubmit={handleRegister} className='form'>
                <Input
                    input={{
                        type : "text",
                        placeholder : 'Pseudo',
                        required : true
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
                />
                <Input
                input={{
                    type : "email",
                    placeholder : 'Email',
                    required : true
                }}
                ref={registerEmail}
                />
                <Input
                    input={{
                        type : "password",
                        placeholder : 'Mot de passe',
                        required : true
                    }}
                    ref={registerPassword}
                />
                <Input input={{type : "submit", value : 'Valider inscription'}}/>
                <span>{error && "Email déjà utilisé"}</span>
            </form>
        </Fragment>
    );
};

export default SignUp;