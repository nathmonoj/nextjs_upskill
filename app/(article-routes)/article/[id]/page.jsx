import React from 'react'
import ArticleDetails from './ArticleDetails'

export default function ArticleData({ params }) {
  return (
    <main>
      <nav>
        <h2>Article Details Details</h2>
      </nav>
      <ArticleDetails articleId={params.id} />
    </main>
  )
}
