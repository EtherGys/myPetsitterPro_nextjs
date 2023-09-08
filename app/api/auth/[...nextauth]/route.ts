import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
import { Adapter } from "next-auth/adapters"
import Providers from "next-auth/providers/credentials"

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    
    providers: [
        CredentialsProvider({
            name: "credential",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmisth"},
                password: {label: "Password", type: "password"},
                email: {label: "Email", type: "email"},
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    throw new Error("credentials email or password is undefined");
                    
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                
                if (!user) {
                    throw new Error("not registered");

                }
                
                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword);
                if (!passwordsMatch) {
                    throw new Error("not the right password");
                }


                return user;
            }
            
        })
    ],
    // session: {
    //     strategy: 'jwt',
    // },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
    
};

const handler =  NextAuth(authOptions)

export { handler as GET, handler as POST }