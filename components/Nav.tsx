import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
        <ul>
            <li> 
                <Link href="/">Home</Link>
            </li>

            <li> 
                <Link href="/about">About our team</Link>
            </li>

            <li> 
                <Link href="/subscribe">Contact us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav