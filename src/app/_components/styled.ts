import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  min-height: 100vh;
  width: 100%;
  background-color: var(--bg);
  position: relative;
`

export const Text = styled.p`
  color: var(--text);
  padding: 2rem 0;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
    width: 60%;
  }
`

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: var(--textLight);

  ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`

export const Container = styled.div`
  max-width: 1068px;
  margin: auto;
  padding: 0 1rem;
  width: 100%;
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
