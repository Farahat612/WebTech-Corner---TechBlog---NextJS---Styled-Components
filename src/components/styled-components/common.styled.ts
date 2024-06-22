'use client'

import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-height: 100vh;
  width: 100%;
  background-color: var(--bg);
  position: relative;
`
export const HangingContainer = styled.div`
  background-color: var(--bg);
  max-width: 85vw;
  min-height: 40vh;
  padding: 2rem;
  margin: -15rem auto 2rem;
  margin-top: -15rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  position: relative;

  .post-img {
    border-radius: 0.5rem;
    width: 100%;
    height: auto;
    position: relative;
  }
`

export const TagsNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;

  .tag {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: var(--bg);
    color: var(--text);
    transition: all 0.3s;

    &:hover,
    &.active {
      background-color: var(--primary-Color);
      color: var(--bg);
    }
  }
`
