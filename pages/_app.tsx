import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from '@/components/Layout'

export default function App({Component,pageProps}:Appprops){
    return(
        <Layout>
            <component {...pageProps} />
        </Layout>
    )
}