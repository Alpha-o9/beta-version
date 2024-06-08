import {SignInButton,SignedIn,SignedOut,UserButton} from '@clerk/nextjs';

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
                <div>
                    <ul>
                        <li>
                            <SignedIn>
                                <UserButton showName />
                            </SignedIn>
                        </li>
                        <li>
                            <SignedOut>
                                <div>
                                    <SignInButton>
                                        <button />
                                    </SignInButton>
                                </div>
                            </SignedOut>
                        </li>
                    </ul>
                </div>
        </div>
    )
}