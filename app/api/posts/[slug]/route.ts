import { NextResponse } from "next/server"
import prisma from '@/lib/connect';

type resType= {
    params:{
        slug:string
    }
}

//GET a single post
export const GET= async (req: Request, {params}:resType )=>{
    const {slug}= params

    try{
        const post=await prisma.post.update({
            where: {slug},
            data: { nbViews: {increment: 1}}
        })
        return NextResponse.json(post, {status:200})
    }catch(error){
        return NextResponse.json({error: "Something went wrong"}, {status:500})
    }
}