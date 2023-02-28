
import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.init';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo={
        createUser,
        signIn
    }
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider