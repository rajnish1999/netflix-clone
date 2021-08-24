import React, { useRef } from 'react'

import './SignInScreen.css'
import { auth, db } from '../Firebase'

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = async (e) => {
        e.preventDefault();

        try {
            const authUser = auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            )
            console.log(authUser)
        }catch(err) {
            console.log(err)
        }
    }

    const signIn = (e) => {
        e.preventDefault();

        try {
            const authUser = auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            )
            console.log(authUser)
        }catch(err) {
            console.log(err)
        }

    }

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signUpScreen__gray">New to Netflix? Sign? </span>
                    <span className="signUpScreen__link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
            
        </div>
    )
}

export default SignInScreen
