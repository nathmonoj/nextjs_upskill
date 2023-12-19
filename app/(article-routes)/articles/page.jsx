import React from 'react'
import ArticleCard from './ArticleCard'

export const metadata = {
  title: 'Articles Dashboard'
}

export default function Articles() {
  const ticketData = [
    {
      "id": "1",
      "title": "Fix the footer links please",
      "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
      "priority": "low",
      "userEmail": "smukhe94@its.jnj.com",
      "createdOn": 1694067919864
    },
    {
      "id": "2",
      "title": "Add in a new stylesheet",
      "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
      "priority": "medium",
      "userEmail": "tghosal@its.jnj.com",
      "createdOn": 1694079525864
    },
    {
      "id": "3",
      "title": "Fix the footer links now",
      "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
      "priority": "high",
      "userEmail": "sgangu01@its.jnj.com",
      "createdOn": 1694160948864
    },
    {
      "title": "sadsad",
      "body": "sddsa",
      "priority": "low",
      "userEmail": "mnath01@kenvue.com",
      "createdOn": 1696431405559,
      "id": "mzWTUl0"
    }
  ]
  return (
    <main>
      <nav className="mb-1 pb-1">
        <div className="block">
          <h2 className="content-center text-2xl">Test Page</h2>
          <div><small>Articles Dashboard</small></div>

          {ticketData.map((ticket) => (
            <ArticleCard ticket={ticket} />
          ))}
        </div>
      </nav>
    </main>
  )
}
