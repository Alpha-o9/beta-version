import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from '@/components/Layout'
import Header from '@/components/Header';
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
//import Modal from '@/components/Modal';

export default function App({ Component,pageProps }:AppProps){
    return(
        <>
            <RegisterModal />
            <LoginModal />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}