import {useContext,createContext,useState,useEffect} from 'react';
import {getAuth,signInWithPopup,signOut,onAuthStateChanged,GoogleAuthProvider,OAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth';

const provider = new OAuthProvider('microsoft.com');    

const AuthContext = useContext();

export const AuthenticationContextProvider = ({children}) => {
    const [user,setUser] = useState('');

    return(
        <AuthenticatonContext.Provider value ={{user}}>{children}</AuthenticationContext.Provider>

    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}