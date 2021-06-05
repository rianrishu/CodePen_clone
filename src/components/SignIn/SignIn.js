import React from "react";
import {auth,provider} from '../firebase'
import './signIn.css'

function SignIn({OnRouteChange}){
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result => {
            if(result.user.emailVerified === true){
                console.log("inside if");
                OnRouteChange('home');
            }
        }))
        .catch((e)=> console.log(e));
    }
        return (
            <div className="container4">
                <button 
                
                type="button" 
                className="btn btn-primary"
                onClick={signIn}
                >
                <h1>Sign In</h1></button>
            </div>
        );
};

export default SignIn;