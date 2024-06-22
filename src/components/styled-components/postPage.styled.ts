'use client'

import styled from 'styled-components'

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  .post-title {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    top: -10rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--primary-Color);
  }
  .post-img {
    border-radius: 0.5rem;
    width: 100%;
    height: auto;
    position: relative;
  }

  .info-line {
    color: var(--primary-Color);
  }

  @media (max-width: 480px) {
    .post-title {
      font-size: 0.9rem;
      top: -9rem;
    }
  }
`
