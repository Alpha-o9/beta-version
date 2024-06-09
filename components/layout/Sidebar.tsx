import React from 'react';
import {signOut} from 'next-auth/react';


import {BsHouseFill,BsBellFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {FaSuitcase} from "react-icons/fa";
import {BiLogOut} from 'react-icons/bi';
import { FaUserFriends } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import useCurrentUser from '@/hooks/useCurrentUser';

const Sidebar = ()=>{
    const {data:currentUser} = useCurrentUser
    const items = [
        {
            label:'Home',
            href:'/',
            icon:BsHouseFill
        },{
            label:'Connections',
            href:'/connections',
            icon:FaUserFriends,
            auth:true
        },{
            label:'Search',
            href:'/search',
            icon:IoSearch,
            auth:true
        },{
            label:'Notifications',
            href:'/notifications',
            icon:BsBellFill,
            auth:true
        },{
            label:'Jobs',
            href:'/jobs',
            icon:FaSuitcase,
            auth:true
        },{
            label:'Create',
            href:'/create',
            icon:FiPlusSquare,
            auth:true
        },{
            label:'Profile',
            href:'/profile',
            icon:FaUser,
            auth:true
        }
    ];
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                
                    <SidebarLogo />
                    
                    {items.map((item)=>(
                        <SidebarItem
                        key = {item.href}
                        href = {item.href}
                        label = {item.label}
                        icon = {item.icon} 
                        auth = {item.auth}
                    />
                    ))}
                    {currentUser && ( 
                        <SidebarItem onClick={()=>signOut} icon={BiLogOut} label = "LogOut" />
                    )}
                </div>
            </div>
        </div>
    )

}

export default Sidebar