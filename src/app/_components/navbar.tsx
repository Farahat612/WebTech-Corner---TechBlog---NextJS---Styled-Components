'use client'

import Link from 'next/link'
import { Nav } from '../../components/styled-components/styled'
import Image from 'next/image'
import Logo from '../../../public/logo/white.png'
import Button from '@/components/ui/Button'

import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const links = [
    { href: '/', text: 'Home' },
    { href: '/topics', text: 'Topics' },
  ]

  const pathname = usePathname()
  return (
    <Nav>
      {/* Logo */}
      <Link href='/'>
        <Image src={Logo} alt='logo' width={70} />
      </Link>

      {/* Navigation */}
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={`link ${pathname === link.href ? 'active' : ''}`}
              href={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href='/new-post'>
        <Button role='button'>Write a Post</Button>
      </Link>
    </Nav>
  )
}
