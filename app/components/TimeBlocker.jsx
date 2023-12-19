import React from 'react'

export default async function TimeBlocker({ timer }) {
  timer = timer && 3000
  await new Promise(resolve => setTimeout(resolve, timer))
  return (
    <></>
  )
}
