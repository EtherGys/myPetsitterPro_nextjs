'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const DashboardPage = () => {
    const {data: session, status} = useSession()
    console.log('session', session);
    console.log('status', status);
    
  return (
    <div>
      Dashboard
      <p>{session?.user.name}</p>
    </div>
  )
}

export default DashboardPage
