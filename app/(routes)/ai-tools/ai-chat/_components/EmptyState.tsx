"use client"
import React from 'react'

const questionList = [
  'What skill I need to know for being a Data Analyst',
  'How do I switch my careers to UI design?'
]

function EmptyState({selectedQuestion}:any) {
  return (
    <div>
      <h2 className='font-bold text-lg'>Ask Anything to AI Career Agent</h2>
      <div>
        {questionList.map((question, index) => (
          <h2 className='p-4 text-center border rounded-lg my-3 hover:primary cursor-pointer' key={index} onClick={()=>selectedQuestion(question)}>{question}</h2>
        ))}
      </div>
    </div>
  )
}

export default EmptyState
