import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
interface TOOL{
  name: string,
  desc: string,
  button: string,
  path: string,
}
type AIToolProps={
    tool:TOOL
}
function AiToolCard({tool}:AIToolProps) {
  return (
    <div className='p-4 border rounded-md shadow-sm'>
      {/* {tool.icon && tool.icon !== '/' && (
        <Image src={tool.icon} width={50} height={50} alt={tool.name} />
      )} */}
      <h2 className='text-lg font-semibold'>{tool.name}</h2>
      <p className='text-sm text-gray-600'>{tool.desc}</p>
      <Button>{tool.button}</Button>
    </div>
  )
}

export default AiToolCard