import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
    const { signInWithGoogle, currentUser } = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);

    const handleSignIn = async () => {
        try {
            await signInWithGoogle();
            setRedirect(true);
        } catch (error) {
            console.error('Error signing in with Google', error);
        }
    };

    if (redirect || currentUser) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default SignIn;