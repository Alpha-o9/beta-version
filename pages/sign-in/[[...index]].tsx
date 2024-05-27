/*import {SignIn} from "@clerk/nextjs";

export default function Page() {
    return (
        <div className = "flex flex-col items-center justify-center gap-12">
            <SignIn path="/sign-in" />
        </div>
    )
}*/
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 min-h-screen">
            <SignIn path="/sign-in" />
        </div>
    );
}
