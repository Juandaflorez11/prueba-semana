import React, { createContext, useEffect, useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(result => setCurrentUser(result.user));
    };

    const signOutUser = () => {
        signOut(auth).then(() => setCurrentUser(null));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, signInWithGoogle, signOutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
