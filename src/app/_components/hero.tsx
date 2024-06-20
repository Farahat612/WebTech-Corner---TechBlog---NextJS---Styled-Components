'use client'

import { HeroSection } from '../../components/styled-components/styled'

export const Hero = () => {
  return (
    <HeroSection id='hero'>
      <div className='hero-text container'>
        <h2 className='title'>
          Welcome to WebTech <span>Corner</span>
        </h2>
        <span className='subtitle'>
          Your go-to place for all about software development and web
          technologies.
        </span>
      </div>
    </HeroSection>
  )
}
