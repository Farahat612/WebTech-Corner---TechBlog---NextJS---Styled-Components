'use client'

import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--secondary-Color);

  .content {
    text-align: center;
    color: var(--textLight);

    div {
      margin: 1rem;
    }
  }
`

export default function NotFound() {
  const router = useRouter()
  return (
    <NotFoundContainer>
      <div className='content'>
        <div role='button' onClick={() => router.back()}>
          <Button>Go back</Button>
        </div>

        <div>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      </div>
    </NotFoundContainer>
  )
}
