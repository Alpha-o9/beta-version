import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from '@/components/Layout'
import Header from '../components/Header';

export default function App({Component,pageProps}:AppProps){
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}