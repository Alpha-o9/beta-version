import Header from '../components/Header';
import Link from 'next/link';

export default function Home(){
    return (
            <>
                <Header label="Home" />
                <Link href='/sign-in' />
            </>
    )
} 