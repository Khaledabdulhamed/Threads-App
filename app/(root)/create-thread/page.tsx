import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const page = async () => {
    const user = await currentUser()

    
  return (
    <h1 className='head-text'>Create Threads</h1>
  )
}

export default page