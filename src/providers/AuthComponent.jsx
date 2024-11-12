import React, { createContext } from 'react';

export const AuthContext = createContext()
const AuthComponent = ({ children }) => {


    const myName = 'john baptiste'


    return (
        <AuthContext.Provider value={{myName}}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthComponent;