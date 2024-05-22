import { NextResponse } from "next/server"
import { CATEGORIES } from "../../../../utils/categories"

// GET
export const GET= async ()=>{
    return NextResponse.json(CATEGORIES, {status:200})
}