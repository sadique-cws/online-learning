// authenticate.js

import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export default async function authenticate(request, res, next) {
    const reqHeaders = new Headers(request.headers);
  const token = reqHeaders.get("authorization")?.replace('Bearer ', '');

  console.log(token)
  
//   if (!token) {
//     return NextResponse.json({ message: 'Unauthorized' },{status:401});
//   }

//   try {
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     return NextResponse.json({ message: 'Unauthorized' },{status:401});
//   }
}
