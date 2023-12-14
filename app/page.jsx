import Image from 'next/image'

export default function Home() {
  const ticketDisplayLimit = 3
  return (
    <main>
      <nav className="mb-1 pb-1">
        <div className="block">
          <h2 className="content-center text-2xl">Tickets(Quick View)</h2>
          <div><small>Displaying latest {ticketDisplayLimit} tickets</small></div>
        </div>
      </nav>
    </main>
  )
}
