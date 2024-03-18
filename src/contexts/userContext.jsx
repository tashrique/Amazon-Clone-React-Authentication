import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();

const user = { email: 'abc' }


const userContext = ({ children }) => {














    const authInfo = { user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default userContext;