'use client'

import {intializeApp,getApps} from 'fireabase/app';
import {firebaseConfig} from './config.ts';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

export const firebaseApp = getApps().length === 0 ? intializeApp(FirebaseConfig) : getApps([0]);
export const auth = getAuth(firebaseApp);