import Link from 'next/link'
import { Nav } from './styled'
import Image from 'next/image'
import Logo from '../../../public/logo/white.png'
import Button from '@/components/ui/Button'

export const Navbar = () => {
  return (
    
      <Nav>
        {/* Logo */}
        <Link href='/'>
          <Image src={Logo} alt='logo' width={70} />
        </Link>

        {/* Navigation */}
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/topics'>Topics</Link>
          </li>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
        </ul>

        {/* CTA */}
        <Link href='/about'>
          <Button role='button'>Write a Post</Button>
        </Link>
      </Nav>
  )
}
