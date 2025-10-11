'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'COMPANIES', href: '/companies' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'NEWS', href: '/news' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return null
}
