import User from '@/app/models/User';
import connectDB from '@/app/utils/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

connectDB();

export  async function POST(req, res) {
    const { name, email, password } = await req.json();

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json({ message: 'User already exists' },{status:500});
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      const user = new User({ name, email, password: hashedPassword });

      // Save the user to the database
      await user.save();

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      return NextResponse.json({ message: 'Registration successful', token });
    } catch (error) {
      return NextResponse.json({ message: error.message });
    }
  } 
