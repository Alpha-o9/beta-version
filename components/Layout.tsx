import Sidebar from './layout/Sidebar';
import FollowBar from './layout/FollowBar';
import SigninUi from './layout/SignnUi';


interface LayoutProps{
    children:React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children})=>{
    return (
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
                <div className="grid grid-cols-4 h-full">
                   <Sidebar /> 
                    <div className="
                        col-span-2
                        lg:col-span-2
                        border-x-[1px]
                        border-neutral-800">
                        {children}
                    </div>
                        <FollowBar />
                        {/*<SigninUi />*/}
                </div>
            </div>

        </div>
    );
}

export default Layout;

/*
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen bg-black">
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 h-full">
        <Sidebar className="lg:col-span-1" />
        <div className="lg:col-span-2 border-x-[1px] border-neutral-800">
        {children}
        </div>
        <FollowBar className="lg:col-span-1" />
        </div>
        </div>
        </div>
    );
}
*/
