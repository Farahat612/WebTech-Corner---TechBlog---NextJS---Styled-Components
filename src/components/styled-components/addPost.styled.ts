'use client'

import styled from 'styled-components'

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

    .submit {
      padding: 0.75rem 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      background-color: var(--primary-Color);
      color: var(--textLight);
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`
