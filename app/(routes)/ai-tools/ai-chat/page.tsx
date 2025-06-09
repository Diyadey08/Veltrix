"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'
import axios from 'axios'

function AiChat() {
  const [userInput, setUserInput] = useState<string>('')
  const [loading,setLoading]=useState(false);
const onSend = async () => {
  setLoading(true);
  try {
    const result = await axios.post('/api/ai-career-chat-agent', {
      userInput: userInput
    });
    console.log(result.data);
  } catch (error) {
    console.error('Client-side error:', error);
    alert("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

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
        <div>
          <EmptyState selectedQuestion={(question: string) => setUserInput(question)} />
        </div>

        {/* Message List Placeholder */}
        <div className='flex-1'>
          {/* MessageList will go here */}
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
    </div>
  )
}

export default AiChat
