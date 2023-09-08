'use client'
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from '@prisma/client'

interface props {
    children: ReactNode,
    session?: Session,
}

const Provider = ({children, session}) => {
  return (
    <SessionProvider {...session !== null ? session={session} : null}>
        {children}
        </SessionProvider>
  )
}

export default Provider
