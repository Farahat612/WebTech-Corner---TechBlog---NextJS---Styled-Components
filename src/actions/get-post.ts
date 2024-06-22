'use server'

import { Post } from '@/constants/types'

export const getPost = async (postId: string) => {
  const response = await fetch(`${process.env.API_URL}/posts/${postId}`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = response.json()
  return data
} 