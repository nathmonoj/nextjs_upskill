import React from 'react'
import Link from 'next/link'
import TimeBlocker from '@/app/components/TimeBlocker'

export default function ArticleCard(props) {
  const { ticket } = props
  return (
    <>
      <TimeBlocker timer={5000} />
      <div key={ticket.id} className="card my-5">
        <Link href={`/article/${ticket.id}`}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </Link>
      </div>
    </>
  )
}
