
import React, { createContext } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';


const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = () => {
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider