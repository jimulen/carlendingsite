import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "../../../models/user";
import bcrypt from "bcryptjs";
export async function POST(req){
    try {
        const { email, password, nida, text, name}= await req.json();
        const hashedpassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({email, password: hashedpassword, nida, text, name});

        return NextResponse.json({ message: "User registered"}, {status: 201});
    } catch (error) {
        return NextResponse.json({ message: "An error occured while registering the user"}, {status: 500});
    }
}