import React from 'react';

import {BsHouseFill,BsBellFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {FaSuitcase} from "react-icons/fa";
import {BiLogOut} from 'react-icons/bi';
import { FaUserFriends } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
//import sideBarLoginButton from './sideBarLoginButton';
//import sidebarLoginButton from './sidebarLoginButton';
import sidebarLoginButton from './sidebarLoginButton';
const Sidebar = ()=>{
    const items = [
        {
            label:'Home',
            href:'/',
            icon:BsHouseFill
        },{
            label:'Connections',
            href:'/connections',
            icon:FaUserFriends
        },{
            label:'Search',
            href:'/search',
            icon:IoSearch
        },{
            label:'Notifications',
            href:'/notifications',
            icon:BsBellFill
        },{
            label:'Jobs',
            href:'/jobs',
            icon:FaSuitcase
        },{
            label:'Create',
            href:'/create',
            icon:FiPlusSquare
        },{
            label:'Profile',
            href:'/users/123',
            icon:FaUser
        },{
            label:'Logout',
            href:'/switch-accounts',
            icon:BiLogOut
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
                    />
                    ))}
                   {/* <SidebarItem onClick = {()=>{} icon = {BiLogOut} label="Logout"} />*/}
                    <sidebarLoginButton />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;