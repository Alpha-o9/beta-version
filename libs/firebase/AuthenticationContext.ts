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
  /*
  // Import the functions you need from the SDKs you need
  
  import React,{createContext,useContext} from 'react';
  import { initializeApp } from "firebase/app";
  import {getAuth} from 'firebase/auth';
  import { getAnalytics } from "firebase/analytics";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  
  export const AuthenticationContext = createContext()
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  const AutheticationContextProvider = ({children}) => {
  
    const firebaseConfig = {
      apiKey: "AIzaSyCVNt_jLU7aOjzfTkalcVt41_6_MYnjkYA",
      authDomain: "alpha-884cc.firebaseapp.com",
      projectId: "alpha-884cc",
      storageBucket: "alpha-884cc.appspot.com",
      messagingSenderId: "916956059434",
      appId: "1:916956059434:web:c2373c92a5e34ce3073053",
      measurementId: "G-2VVQ4NGGLW"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  
    const auth = getAuth(app)
    return(
      <AuthenticationContext.Provider
        value = {{
          firebaseConfig,
          auth,
        }}
      >
        {children}
        </AuthenticationContext.Provider>
    )
  
    const analytics = getAnalytics(app);
  }
  
  export default AuthenticationProvider*/