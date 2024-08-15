import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col '>
      <h1 className='text-2xl font-semibold my-5 text-blue-600'>GPT Companion</h1>
      <p className='text-xl font-semibold text-center max-w-sm text-brown-500'>Your AI Language Companion</p>
      <p className='text-xl font-semibold text-center max-w-sm text-brown-500'>Powered by Open AI</p>

      <Link href="/chat" className={"btn btn-accent btn-sm my-5"}>Get Started</Link>
    </div>
  )
}

export default Home