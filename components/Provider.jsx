'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session }) => {
  // Higher order component -> wrap other components with it
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider