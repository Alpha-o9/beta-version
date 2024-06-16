import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/libs/prismadb';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Authorize function called'); // Logging start of authorize function

        if (!credentials?.email || !credentials?.password) {
          console.error('Invalid credentials: missing email or password');
          throw new Error('Invalid credentials');
        }

        console.log('Credentials:', credentials);

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        console.log('User:', user);

        if (!user || !user.hashedPassword) {
          console.error('Invalid credentials: user not found or missing hashed password');
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        console.log('IsCorrectPassword:', isCorrectPassword);

        if (!isCorrectPassword) {
          console.error('Invalid credentials: incorrect password');
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

/*import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/libs/prismadb';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        console.log('Credentials:', credentials);

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        console.log('User:', user);

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        console.log('IsCorrectPassword:', isCorrectPassword);

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
*/

/*import bcrypt from 'bcrypt';
//import NextAuth from 'next-auth/next'
//import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/libs/prismadb';

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name : 'credentials',
            credentials:{
                email:{label:'email',type:'text'},
                password:{label:'password',type:'password'},
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Invalid Credentials');
                }
                
                console.log('Credentials:',credentials)

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                console.log('User:',user);


                if(!user || !user?.hashedPassword){
                   throw new Error('Invalid Credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                console.log('IscorrectPassword:',isCorrectPassword);

                if(!isCorrectPassword){
                   throw new Error('Invalid credentials');
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session:{
        strategy:'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
        secret: process.env.NEXTAUTH_SECRET
});*/