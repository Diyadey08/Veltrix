import { desc } from 'drizzle-orm'
import React from 'react'
import AiToolCard from '@/app/(routes)/dashboard/_components/AiToolCard'
const aiToolsList=[
    {
       
  name: 'AI Career Q&A Chat',
  desc: 'Ask career questions',
  icon: '/',
  button: 'Ask Now',
  path: '/ai-tools/ai-chat'
},
{
  name: 'AI Resume Analyzer',
  desc: 'Improve your resume',
  icon: '/',
  button: 'Analyze Now',
  path: '/ai-resume-analyzer'
},
{
  name: 'Career Roadmap Generator',
  desc: 'Build your roadmap',
  icon: '/',
  button: 'Generate Now',
  path: '/career-roadmap-generator'
}
  ,
{
  name: 'Cover Letter Generator',
  desc: 'Write a covber letter',
  icon: '/',
  button: 'Create Now',
  path: '/career-roadmap-generator'
}  
]
function AiTools() {
  return (
    <div className='mt-7 p-5 bg-white border rounded-xl'>
        <h2 className='font-bold text-lg'>Available AI Tools</h2>
  <p>Start Building and Shape Your Career with this</p>
   <div className='grid grid-cols-1 '>{aiToolsList.map((tool,index)=>(
   <AiToolCard tool={tool} key={index}/>
   ))}</div>
   
    </div>
  )
}

export default AiTools