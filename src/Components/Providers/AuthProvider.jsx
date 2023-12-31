import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config'

export const AuthContext=createContext(null);

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const provider= new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    const GoogleSignIn=()=>{
        return signInWithPopup(auth,provider)
    }

    const GithubSignIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
    
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        GoogleSignIn,
        GithubSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;