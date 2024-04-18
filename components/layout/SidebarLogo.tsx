import {useRouter} from 'next/router';
import { BsYinYang } from "react-icons/bs";
const SidebarLogo = ()=>{
    const router = useRouter();
    return (
        <div onClick={()=>router.push('/')} className="
            rounded-full
            w-14
            h-14
            p-4
            flex
            items-center
            justify center
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            transition">
        <BsYinYang size = {24} color = "white" />
        </div>

    );
}
export default SidebarLogo;