import {SignInButton,SignedIn,UserButton} from '@clerk/nextjs';

export default function SigninUi(){
    return(
        <div className = "
                        rounded-full
                        w-18
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
            <SignedIn>
                <UserButton showName />
            </SignedIn>
        </div>
    )
}