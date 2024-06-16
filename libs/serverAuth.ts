/*import {NextApiRequest} from 'next';
import {getSession} from 'next-auth/react';

import prisma from '@/libs/prismadb';

const serverAuth = async (req:NextApiRequest) => {
    const session = await getSession({ req });

    if(!session?.user?.email){
        throw new Error('Not Signed In');

    }
    const currentUser = await prisma.user.findUnique({
        where:{
            email:session.user.email
        }
    });

    if(!currentUser){
        throw new Error('Not signded In');

    }

    return { currentUser };
};

export default serverAuth;*/
import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) => {
    try {
        const session = await getSession({ req });

        if (!session?.user?.email) {
            throw new Error('Not Signed In');
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if (!currentUser) {
            throw new Error('Not Signed In');
        }

        return { currentUser };
    } catch (error) {
        console.error('Error in serverAuth:', error);
        throw error;
    }
};

export default serverAuth;
