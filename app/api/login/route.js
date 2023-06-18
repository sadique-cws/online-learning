
import User from '@/app/models/User';
import connectDB from '@/app/utils/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

connectDB();

export async function POST(req, res) {
    const { email, password } =  await req.json();

    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' },{status:401});
      }

      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      return NextResponse.json({ message: 'Login successful', token });
    } catch (error) {
      return NextResponse.json({ message: 'Login failed' });
    }
  }
