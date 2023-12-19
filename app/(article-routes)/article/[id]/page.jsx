import React from 'react'
import ArticleDetails from './ArticleDetails'
import TimeBlocker from '@/app/components/TimeBlocker'

export default function ArticleData({ params }) {
  return (
    <>
      <TimeBlocker timer={5000} />
      <main>
        <nav>
          <h2>Article Details Details</h2>
        </nav>
        <ArticleDetails articleId={params.id} />
      </main>
    </>
  )
}
