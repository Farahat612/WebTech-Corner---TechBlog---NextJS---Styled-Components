'use client'
import { useRouter } from 'next/navigation'
import Button from '../Button'
export const GoBack = () => {
  const router = useRouter()
  return (
    <Button variant='secondary' onClick={() => router.back()}>
      Go Back
    </Button>
  )
}
