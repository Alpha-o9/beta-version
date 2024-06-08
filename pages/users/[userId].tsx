import {ClipLoader} from 'react-spinners';
import {useRouter} from 'next/router';


import Header from '@/components/Header';
import useUser from '@/hooks/useUser';
import UserHero from '@/components/users/UserHeader';
import UserBio from '@/components/users/UserBio';


const UserView = () => {

    const router = useRouter();
    const {userId} = router.query;

    const {data:fetchedUser,isLoading} = useUser(userId as string);

    if (isLoading || !fetchedUser){
        return(
            <div className = "flex justify-center items-center h-full">
                <ClipLoader coler='lightblue' size={80}/>
            </div>
        )
    }
    return (
        <>

            <Header showBackArrow label = {fetchedUser?.name}/>
            <userHero userId={userId as string} />
            <UserBio userId={userId as string} />

            
        </>
    )
}

export default UserView;