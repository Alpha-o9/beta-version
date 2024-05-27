import {useRouter} from 'next/router';
import { DiSenchatouch } from "react-icons/di";

const sideBarAccount = () => {
    const router = useRouter();
    return (
        <div onClick={()=>router.push('/')} className = "
            rouded full
            w-14
            h-14
            p-4
            pl-6
            flex
            items-center
            justify center
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            transition" >

                <DiSenchattouch size = {24} color="white" />

        
        </div>
    );
}

export default sideBarAccount;