import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config'

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Clear error whenever a new auth operation is attempted
    const clearError = () => setError('');

    const createUser = (email, password) => {
        clearError();
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoURL) => {
        clearError();
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        });
    }

    const signIn = (email, password) => {
        clearError();
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                let errorMessage = "Login failed. Please check your credentials.";
                
                if (error.code === 'auth/user-not-found') {
                    errorMessage = "User not found. Please check your email or register.";
                } else if (error.code === 'auth/wrong-password') {
                    errorMessage = "Incorrect password. Please try again.";
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = "Invalid email format.";
                } else if (error.code === 'auth/too-many-requests') {
                    errorMessage = "Too many unsuccessful login attempts. Please try again later.";
                }
                
                setError(errorMessage);
                throw error;
            });
    }

    const logOut = () => {
        clearError();
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));
    }

    const GoogleSignIn = () => {
        clearError();
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError("Google sign-in failed. Please try again.");
                throw error;
            });
    }

    const GithubSignIn = () => {
        clearError();
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
            .catch(error => {
                setError("GitHub sign-in failed. Please try again.");
                throw error;
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        
        return () => {
            unsubscribe();
        }
    }, []);
    
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        GoogleSignIn,
        GithubSignIn,
        updateUserProfile,
        error,
        clearError
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;