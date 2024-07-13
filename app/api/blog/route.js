import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import BlogModel from "@/lib/models/blogModel";
// Database connection call
const LoadDB = async () =>{
    await connectDB()
}
LoadDB();

// Get post

export async function GET(request,response){
    const blog  = await BlogModel.find({});
    return NextResponse.json({
        success:true,
        Blog:blog,
        message:"Blog List get Successfully!",
        
    })

}

// Add post 
export async function POST(request,response){
const formData = await request.formData();
const timestamp = Date.now();

const image = formData.get('image');
const imageByteData = await image.arrayBuffer();
const buffer = Buffer.from(imageByteData);
const path = `./public/${timestamp}_${image.name}`;
await writeFile(path,buffer);
const imageURL = `/${timestamp}_${image.name}`;

const blogData = {
    title:`${formData.get('title')}`,
    description:`${formData.get('description')}`,
    category:`${formData.get('category')}`,
    author:`${formData.get('author')}`,
    image:`${imageURL}`,
    author_image:`${formData.get('Profile_Image')}`,
    
}

await BlogModel.create(blogData);
return NextResponse.json({
    success:true,
    message:"Blog Added Successfully!",
    
})
}