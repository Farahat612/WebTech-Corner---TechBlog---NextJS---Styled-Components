'use client'

import { Button_Variants } from '@/constants/types'
import { Container } from './Styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Button_Variants
}

const Button = ({ variant = 'primary', children }: ButtonProps) => {
  return <Container $variant={variant}>{children}</Container>
}

export default Button
