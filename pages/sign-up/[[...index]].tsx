import {SignUp} from "@clerk/nextjs";

export default function Page(){
    return (
        <div className="flex flex-col items-center justify-center gap-12 min-h-screen">
        <SignUp path="/sign-up" />
    </div>
    );
}