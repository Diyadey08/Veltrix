"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';
interface TOOL{
  name: string,
  image:string,
  desc: string,
  button: string,
  path: string,
}
type AIToolProps={
    tool:TOOL
}
function AiToolCard({tool}:AIToolProps) {
   const router = useRouter()
const id=uuidv4()
  const handleClick = () => {
    router.push(tool.path)
  }
  const onClickButton=()=>{

  }
  return (
    <div className='p-4 border rounded-md shadow-sm'>
      {/* {tool.icon && tool.icon !== '/' && (
        <Image src={tool.icon} width={50} height={50} alt={tool.name} />
      )} */}
      <h2 className='text-lg font-semibold'>{tool.name}</h2>
      <p className='text-sm text-gray-600'>{tool.desc}</p>
      <Link href={tool.path+"/"+id}>
      <Button onClick={onClickButton} className='mt-3'>
        {tool.button}
      </Button>
      </Link>
      
    </div>
  )
}

export default AiToolCard