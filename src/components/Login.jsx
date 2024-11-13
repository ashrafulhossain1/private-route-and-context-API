import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../providers/AuthComponent';
import { Link } from 'react-router-dom';

const Login = () => {
    const { googleSignIn, githubSignIn, signInWithEmailAndPass, forgetPassword } = useContext(AuthContext)
    const emailRef = useRef()
    // console.log(githubSignIn)

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        // console.log(email, password)

        signInWithEmailAndPass(email, password)
            .then((result) => {
                console.log("log in Successsssssss")
            })
            .catch((error) => {
                console.log('Something Error', error.message)
            })
    }
    const handleForgetPassword = () => {
        const email = (emailRef.current.value)
        console.log(email)
        forgetPassword(email)
            .then(() => {
                console.log('reset mail sent of your email')
            })
            .catch(error => {
                console.log("Oops Reset mail not Get", error.message)
            })

    }



    // Github and Google Login/ SignIn=> both same as (Sign Up & Sign In) [START]
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                console.log('successfully login')
            })
            .catch(err => console.log(err))
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    // Github and Google Login/ SignIn=> both same as (Sign Up & Sign In) [END]


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                {/* form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label onClick={handleForgetPassword} className="label">
                                <a className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* login */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Create New User for <Link className='text-blue-500' to={'/signUp'}>Sign Up</Link></p>
                            <div className="divider m-0"></div>
                            <p>Log in with <button onClick={handleGoogleSignIn} className="text-blue-500">Google</button> </p>
                            <p>Log in with <button onClick={handleGithubSignIn} className="text-blue-500">Github</button> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;