import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';


// Providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
export const AuthContext = createContext()


const AuthComponent = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUserUseEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const UpdateNameAndPhoto = (profileInfo) => {
        return updateProfile(auth.currentUser, profileInfo)
    }

    const signInWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    // signInWith Gmail/Github (START)
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // signInWith Gmail/Github (END)

    const userSignOutBtn = () => {
        signOut(auth)
            .then(() => {
                console.log('LOG OUT SUCCESSFULLY')
            })
            .catch(error => {
                console.log("LOG OUT ERROR")
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (presentUser) => {
            if (presentUser) {
                setUser(presentUser)
            }
            else {
                console.log("user Not Found")
                setUser(null)
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])


    console.log("Now log in", user)


    const providedInfo = {
        googleSignIn,
        githubSignIn,
        createUserUseEmailAndPass,
        signInWithEmailAndPass,
        userSignOutBtn,
        user,
        setUser,
        forgetPassword,
        UpdateNameAndPhoto,
        loading
    }


    return (
        <AuthContext.Provider value={providedInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthComponent;