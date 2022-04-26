import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="bg-teal-500">
        <nav className="flex justify-between px-10 py-5">
            <h3 className="text-white text-3xl">Logo</h3>
            <ul className="flex space-x-3 text-white items-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar