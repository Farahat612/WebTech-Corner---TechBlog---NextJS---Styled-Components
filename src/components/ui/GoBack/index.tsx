'use client'
import { useRouter } from 'next/navigation'
import Button from '../Button'
import { BsArrowLeft } from 'react-icons/bs'
import { BackButton } from './styled'
export const GoBack = () => {
  const router = useRouter()
  return (
    <BackButton onClick={() => router.back()}>
      <Button variant='secondary'>
        <BsArrowLeft /> Go Back
      </Button>
    </BackButton>
  )
}
