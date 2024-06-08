/*
import { useCallback, useEffect, useState } from 'react';
import { SignUp, currentUser } from "@clerk/nextjs";

 
export default function SignUpModal() {
  const [user, setUser] = useState<currentUser | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const user = await currentUser();
      setUser(user || null);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <SignUp path="/sign-up" />
      </div>
    );
  }

  if (user && !user.isAnonymous) {
    return <div>You're already signed in.</div>;
  }

  return null;
}


*/
import { useEffect, useState } from 'react';
import { SignUp, currentUser } from "@clerk/nextjs";
import Page from '@/pages/sign-up/[[...index]].tsx';


export default async function SignUpModal(){
  const user = await currentUser();

  if(!user){
    return <Page />
  }
}