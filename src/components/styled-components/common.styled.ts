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