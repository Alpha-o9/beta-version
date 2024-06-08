import bcrypt from 'bcrypt';
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials';
import {PrimsaAdapter} from '@/next-auth/prisma-adapter';
import prisma from '@/libs/prismadb';

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialProvider({
            name : 'credentials',
            credentials:{
                email:{label:'email',type:'text'},
                password:{label:'password',type:'text'},
            },
            async authorize(credentials){
                if(!credentials?.emial || !credentials?.password){
                    throw new Error('Invalid Credentials');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credential.email
                    }
                });

                if(!user || !user?.hashedPassword){
                    throw new Error('Invalid Credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    userr.hashedpassword
                );


                if(!isCorrectPassword){
                    throw new Error('Invalid credentials');
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV != 'development',
    session:{
        strategy:'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
        secret: process.env.NEXTAUTH_SECRET
});