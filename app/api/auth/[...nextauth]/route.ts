import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import { compare } from "bcrypt";

const handler = NextAuth({
    providers : [
        Credentials ({
            id : "credentials",
            name : "Credentials",
            credentials : {
                email : {label : "Email", type : "text", placeholder : "Email"},
                password : {label : "Password", type : "password"}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password) {
                    throw new Error("Please enter your email and password")
                } 
                const user = await prismadb.user.findUnique({
                    where : {email : credentials.email}
                })
                if(!user || !user.hashedPassword) {
                    throw new Error("User not found")
                }
                const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

                if(!isCorrectPassword) {
                    throw new Error("Incorrect password")
                }

                return user;
        }})

    ],
    pages : {
        signIn : "/auth"
    },
    debug : process.env.NODE_ENV === "development",

    session : {
        strategy : "jwt",
    },
    jwt : {
        secret : process.env.NEXTAUTH_JWT_SECRET,
    },
    secret : process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }