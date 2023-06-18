import Course from '@/app/models/Course';
import connectDB from '@/app/utils/db';
import { NextResponse } from 'next/server';


connectDB();

export async function GET(req,{params}){
    try {
        const course = await Course.findOne({slug:params.slug});
        return NextResponse.json(course,{status:200});
      } catch (error) {
        return NextResponse.json({ message: 'Error fetching courses' },{status:500});
      }
}
