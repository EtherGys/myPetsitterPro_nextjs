import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
import { Adapter } from "next-auth/adapters"
import Providers from "next-auth/providers/credentials"
import { authOptions } from "auth";





const handler =  NextAuth(authOptions)

export { handler as GET, handler as POST }