
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';


export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]= useState(true)

          //----for loginIn-----
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //----for signIn-----
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

        //----for logout-----

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


        //----for auth observer-----
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
           
        });

        return () => unsubscribe();
    }, [])

    const authInfo={
        createUser,
        signIn,
        user,
        logOut,
        loading
        
    }
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider