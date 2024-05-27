import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from '@/components/Layout'
import Header from '@/components/Header';
import loginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import {ClerkProvider} from '@clerk/nextjs';
import CredentialProvider from 'next-auth/providers/credentials';
import {dark} from '@clerk/themes';

export default function App({ Component,pageProps }:AppProps){
    return(
        <ClerkProvider 
            appearance = {{
                baseTheme:dark
            }}>
            <RegisterModal />
            <loginModal />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ClerkProvider>
    )
}