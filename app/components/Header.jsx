import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-sky-700 text-white px-10 py-4 flex justify-between'>
        <Link href="/" className='text-white'>
            <h1>Online Learning</h1>
        </Link>

        <div className="flex gap-4">
            <Link href='/' className='text-white'>Home</Link>
            <Link href='/login' className='text-white'>Login</Link>
            <Link href='/register' className='text-white'>Register</Link>
        </div>
    </div>
  )
}

export default Header