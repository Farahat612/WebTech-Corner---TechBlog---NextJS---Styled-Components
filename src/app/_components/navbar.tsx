import Link from 'next/link'
import { Nav } from './styled'
import Image from 'next/image'
import Logo from '../../../public/logo/dark.png'

export const Navbar = () => {
  return (
    <Nav>
      {/* Logo */}
      <Link href='/'>
        <Image src={Logo} alt='logo' width={60}  />
      </Link>

      {/* Navigation */}
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/services'>Services</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </Nav>
  )
}
