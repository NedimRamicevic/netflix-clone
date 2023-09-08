import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export  async function POST(req: Request) {

    
       
    try {
        const { email,name, password } = await req.json();
        if (!email || !name || !password) return NextResponse.json({ message: 'Please fill all fields' });
        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        });

        if(existingUser) return NextResponse.json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image:"",
                emailVerified: true,
            }
        });
            
        return NextResponse.json(newUser);
        
    } catch (error) {
        console.log("error");
    }
}

export async function GET(req: Request) {
    return NextResponse.json({ message: 'Hello' });
}