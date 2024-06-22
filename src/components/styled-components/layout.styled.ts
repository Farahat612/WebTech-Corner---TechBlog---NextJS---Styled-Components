'use client'

import styled from 'styled-components'

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: var(--textLight);
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .active {
      color: var(--primary-Color);
    }

    li .link:hover {
      color: var(--primary-Color);
    }
  }
`

export const HeroSection = styled.section`
  width: 100%;
  min-height: 25rem;
  background-color: var(--secondary-Color);
  color: var(--textLight);
  display: grid;
  place-items: center;
  justify-content: center;

  .hero-text {
    display: flex;
    max-width: 70vw;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    text-transform: uppercase;

    .title {
      font-size: 2rem;
      span {
        color: var(--primary-Color);
      }
    }

    .subtitle {
      font-size: 1.2rem;
      color: var(--textLight);
    }
  }
`

export const FooterContainer = styled.footer`
  margin-top: auto;
  background-color: var(--secondary-Color);
  color: var(--textLight);
  padding: 1rem 0;
  text-align: center;
  width: 100%;

  span {
    color: var(--primary-Color);
  }
`
