import styled from 'styled-components'

export const Container = styled.div`
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--text);
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`
