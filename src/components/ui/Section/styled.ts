import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding: 2rem;
  width: 100%;

  .heading {
    position: relative;
    width: fit-content;
    margin: auto;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    padding: 1rem;
    color: var(--secondary-Color);

    span {
      color: var(--primary-hoverColor);
    }

    &::after {
      right: -2rem;
    }
    &::before {
      left: -2rem;
    }
    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: var(--primary-hoverColor);
    }
  }
`
