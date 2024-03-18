import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);




const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);




    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User", currentUser);
            setUser(currentUser);
        });

        return () => unSubscribe()

    }, [])








    const authInfo = { user, setUser, createUser, logIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;