import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
} from 'firebase/auth';

import {auth} from './clietApp.ts';

export function onAuthstateChanged(cb) {
    return _onAuthStateChanged(auth,cb);
}

export async function signInWithGoogle(){
    const provider = new GoogleAuthProvider();

    try{
        await signInWithPopup(auth,provider);
    }catch(error){
        console.error("Error singing in with google",error);
    }
}
export async function signOut() {
    try{
        return auth.signOut();
    }catch(error){
        console.error("Error signing out with google")
    }
}