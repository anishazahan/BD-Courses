
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

          //----for loginIn-----
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //----for signIn-----
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

        //----for logout-----

    const logOut = () =>{
        return signOut(auth);
    }


        //----for auth observer-----
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
           
        });

        return () => unsubscribe();
    }, [])

    const authInfo={
        createUser,
        signIn,
        user,
        logOut
        
    }
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider