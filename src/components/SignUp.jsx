import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthComponent';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import auth from '../firebase.init';

const SignUp = () => {
    const { createUserUseEmailAndPass, userSignOutBtn, UpdateNameAndPhoto, setUser } = useContext(AuthContext);
    const navigateToLogin = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()

        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photo.value;
        console.log(name, email, password, photoURL)
        const profileInfo = {
            displayName,
            photoURL
        }
        console.log(profileInfo)

        createUserUseEmailAndPass(email, password)
            .then((result => {
                console.log('create done', result)

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Email verification sent")
                    })

                // Update Profile
                UpdateNameAndPhoto(profileInfo)
                    .then(() => {
                        console.log('Photo update success')

                    })
                    .catch(error => {
                        console.log('PHOTO added ERROR', error)
                    })



                // sign OUT
                userSignOutBtn()
                navigateToLogin('/login')
            }))
            .catch((error) => {
                console.log(error.message)
            })


    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                </div>
                {/* form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {/* Profile Picture */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        {/* login */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        {/* login with Others Platform */}
                        <div className='mt-2'>
                            <p>Already have an account , Please<Link to={`/login`} className='text-blue-500 ml-3'>Login</Link>  </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;