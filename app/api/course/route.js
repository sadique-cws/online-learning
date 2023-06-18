import authenticate from '@/app/middleware/authenticate';
import Course from '@/app/models/Course';
import connectDB from '@/app/utils/db';
import { NextResponse } from 'next/server';


connectDB();

export async function GET(req){
    try {
        const courses = await Course.find({});
        return NextResponse.json(courses,{status:200});
      } catch (error) {
        return NextResponse.json({ message: 'Error fetching courses' },{status:500});
      }
}

export async function POST(req,res) {
    const data =  await req.json();

    try {
      authenticate(req,res, async () => {
        const course = new Course(data);
             await course.save();
  
        return NextResponse.json({ message: 'Course created successfully' },{status:201});
      })

      
    } catch (error) {
      return NextResponse.json({ message: error.message },{status:500});
    }
  } 