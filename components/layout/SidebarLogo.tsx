import {useRouter} from 'next/router';
//import { BsYinYang } from "react-icons/bs";
//import { GrTurbolinux } from "react-icons/gr";
//import { FaLinux } from "react-icons/fa";
import { SiVoidlinux } from "react-icons/si";


const SidebarLogo = ()=>{
    const router = useRouter();
    return (
        <div onClick={()=>router.push('/')} className="
            rounded-full
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
            transition">
        <SiVoidlinux size = {24} color='white'/>
        </div>

    );
}
export default SidebarLogo;

//Test
//test 