import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">This article id is invalid.</h2>
      <p>Go back to the <Link href="/articles">Article Dashboard</Link>.</p>
    </main>
  )
}
