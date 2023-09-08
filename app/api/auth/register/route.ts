import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import { json } from 'stream/consumers';

export  async function POST(req: Request) {

    console.log(req.body);
       
    // try {
    //     const { email,name, password } = req.body;

    //     const existingUser = await prismadb.user.findUnique({
    //         where: {
    //             email
    //         }
    //     });

    //     if(existingUser) return res.status(422).end();

    //     const hashedPassword = await bcrypt.hash(password, 12);

    //     const newUser = await prismadb.user.create({
    //         data: {
    //             email,
    //             name,
    //             hashedPassword,
    //             image:"",
    //             emailVerified: true,
    //         }
    //     });
            
    //     return NextResponse.json(newUser);
        
    // } catch (error) {
    //     return res.status(400).end();
    // }
}

export async function GET(req: Request) {
    return NextResponse.json({ message: 'Hello' });
}