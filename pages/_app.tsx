'use client'
import '@/styles/globals.css'

import type {AppProps} from 'next/app'


import {Toaster} from 'react-hot-toast';
import {SessionProvider} from 'next-auth/react';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import {AuthenticationContextProvider} from '@/libs/firebase/AuthenticationContext';
//import Modal from '@/components/Modal';

export default function App({ Component,pageProps }:AppProps){
    return(
        <AuthenticationContextProvider>
            <Toaster />
            <RegisterModal />
            <LoginModal />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthenticationContextProvider>
    )
}