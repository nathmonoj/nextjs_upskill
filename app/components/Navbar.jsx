import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './images/helpdesk.jpg'

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <Image src={Logo} alt='My Helpdesk' width={50} placeholder='blur' quality={100} />
        <h1>Hepldesk <small className='text-xs'>Powered by NextJS(Poc)</small></h1>
        <Link href="/">Dashboard</Link>
        <Link href="/test-page">Test-Page</Link>
      </div>
    </nav>
  )
}
