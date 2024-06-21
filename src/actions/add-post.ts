'use server'

import { Post } from '@/constants/types'
import { revalidatePath } from 'next/cache'

type PostToSend = Pick<Post, 'title' | 'tag' | 'content'>

export const addPost = async (post: PostToSend) => {
  const response = await fetch(`${process.env.API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })

  if (!response.ok) {
    return {
      error: 'Failed to add post',
    }
  }

  revalidatePath('/posts')
}
