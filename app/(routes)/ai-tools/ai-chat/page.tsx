"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderCircle, Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import EmptyState from './_components/EmptyState'
import axios from 'axios'
import Markdown from 'react-markdown'
import { useParams } from 'next/navigation'
type messages={
  content:string,
  role:string,
  type:string
}
function AiChat() {
  const [userInput, setUserInput] = useState<string>('')
  const [loading,setLoading]=useState(false);
  const [messageList,setMessageList]=useState<messages[]>([])


  const {chatid}=useParams();
    console.log(chatid)
  
  const onSend = async () => {
  setLoading(true);
  setMessageList(prev=>[...prev,{
    content:userInput,
    role:'user',
    type:'text'
  }])
  setUserInput('');
  try {
    const result = await axios.post('/api/ai-career-chat-agent', {
      userInput: userInput
    });
    console.log(result.data);
    setMessageList(prev=>[...prev,result.data])

  } catch (error) {
    console.error('Client-side error:', error);
    alert("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};
console.log(messageList)

useEffect(()=>{

},[messageList])


return (
    <div className='px-10 md:px-24 lg:px-34 xl:px-48'>
      {/* Header */}
      <div className='flex items-center justify-between gap-8'>
        <div>
          <h2 className='text-2xl font-bold'>AI Career Q/A Chat</h2>
          <p className='text-gray-500'>Smarter career decisions start here</p>
        </div>
        <Button>+ New Chat</Button>
      </div>

      {/* Chat Container */}
      <div className='flex flex-col h-[75vh] mt-6'>
        {/* Empty State */}
       {messageList.length <= 0 &&  <div className='mt-5'>
          <EmptyState selectedQuestion={(question: string) => setUserInput(question)} />
        </div>}

        {/* Message List Placeholder */}
        <div className='flex-1'>
          {messageList?.map((message,index)=>(
            <div key={index} className={`flex mb-2 ${message.role=='user'?'justify-end':'justify-start'}`}>
              <div className={`p-3 rounded-lg gap-2 ${message.role=='user'?
              'bg-gray-200 text-black rounded-lg':
              "bg-gray-50 text-black"}`}>
                <Markdown>
                  {message.content}
                </Markdown>
                
              </div>
              <div className='flex justify-start'>
                {loading && messageList?.length-1==index && <div> <LoaderCircle className='animate-spin'/>Thinking...
                </div>}
              </div>
            </div>
          ))}
          {/* MessageList will go here */}
        </div>
        </div>
        {/* Input Bar */}
        <div className='flex justify-between items-center gap-6 mt-4'>
          <Input
            placeholder='Type your question here...'
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button onClick={onSend} disabled={loading}><Send /></Button>
        </div>
      </div>
    
  )
}

export default AiChat
