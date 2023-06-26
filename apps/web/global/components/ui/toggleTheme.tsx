"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"

export function ToggleTheme () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  return (
    <button
      onClick={ () => theme == "dark" ? setTheme('light') : setTheme("dark") }
      className=''>
      { theme == "dark" ? <Moon /> : <Sun />}
    </button>
  )
}