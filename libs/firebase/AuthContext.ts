/*import {createContext,useContext,useState,useEffect} from 'react';

const AuthContext = createContext();

const config = {
    apiKey: process.env."AIzaSyCVNt_jLU7aOjzfTkalcVt41_6_MYnjkYA",
    authDomain: process.env."alpha-884cc.firebaseapp.com",
    projectId: process.env."alpha-884cc",
    storageBucket: process.env."alpha-884cc.appspot.com",
    messagingSenderId: process.env."916956059434",
    appId: process.env."1:916956059434:web:c2373c92a5e34ce3073053",
    measurementId: process.env."G-2VVQ4NGGLW"
  };
  
  Object.keys(config).forEach((key) => {
    const configValue = config[key] + "";
    if(configValue.charAt(0) === '"'){
      config[key] = configValue.substring(1,configValue.length-1);
    }
  });
  export default firebaseConfig = config;
  */
  
  import React,{createContext,useContext} from 'react';
  import { initializeApp } from "firebase/app";
  import {getAuth} from 'firebase/auth';
  import { getAnalytics } from "firebase/analytics";

  
  const AuthContext = createContext()
  
  
  epxort const AutheticationContextProvider = ({children}) => {
  
    const firebaseConfig = {
      apiKey: "AIzaSyCVNt_jLU7aOjzfTkalcVt41_6_MYnjkYA",
      authDomain: "alpha-884cc.firebaseapp.com",
      projectId: "alpha-884cc",
      storageBucket: "alpha-884cc.appspot.com",
      messagingSenderId: "916956059434",
      appId: "1:916956059434:web:c2373c92a5e34ce3073053",
      measurementId: "G-2VVQ4NGGLW"
    };
    const [user,setUser] = useState('');

    const app = initializeApp(firebaseConfig);
  
    const auth = getAuth(app)
    return(
      <AuthenticationContext.Provider
        value = {{
          firebaseConfig,
          auth,
          user
        }}
      >
        {children}
        </AuthenticationContext.Provider>
    )
  
  //  const analytics = getAnalytics(app);
  }
  export const UserAuth = () => {
    return useContext(AuthContext)
  }
  