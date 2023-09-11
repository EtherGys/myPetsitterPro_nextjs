'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from '@prisma/client'

interface props {
    children: ReactNode,
}

const Provider = ({children}) => {
  return (
    <SessionProvider >
        {children}
        </SessionProvider>
  )
}

export default Provider
