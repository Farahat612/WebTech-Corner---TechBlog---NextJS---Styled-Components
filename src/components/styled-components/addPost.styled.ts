'use client'

import styled from 'styled-components'

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

export const AddPostContainer = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    /* Fields styles */
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 1.2rem;
        color: var(--text);
      }

      input,
      select,
      textarea {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid var(--text);
        border-radius: 0.5rem;
        background-color: var(--bg);
      }

      textarea {
        resize: vertical;
      }
    }

    button {
      padding: 0.5rem;
      font-size: 1rem;
      background-color: var(--primary-Color);
      color: var(--secondary-Color);
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`
