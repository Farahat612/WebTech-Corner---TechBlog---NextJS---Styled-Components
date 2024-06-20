'use client'

import { Container, HeroSection } from './styled'

export const Hero = () => {
  return (
    <HeroSection id='hero'>
      <Container className='hero-text'>
        <h2 className='title'>
          Welcome to WebTech <span>Corner</span>
        </h2>
        <span className='subtitle'>
          Your go-to place for all about software development and web
          technologies.
        </span>
      </Container>
    </HeroSection>
  )
}
