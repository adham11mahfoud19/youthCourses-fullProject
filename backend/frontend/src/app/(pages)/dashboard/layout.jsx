"use client"
import { useAuth } from '@/hooks/auth'
import React from 'react'

const layout = ({children}) => {
    const { user } = useAuth({ middleware: 'auth' })
    console.log(useAuth({middleware: 'auth'}))

    return (
    <div>
        <div className="w-full bg-green-400 p-12 ">
            joined at {user?.created_at}
        </div>
            {children}
    </div>
  )
}

export default layout
