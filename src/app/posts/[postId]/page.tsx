import { HangingContainer } from '@/components/styled-components/styled'
import { Post } from '@/constants/types'
import { getImg } from '@/lib/img-matcher'
import Image from 'next/image'

async function getPost(postId: string) {
  const response = await fetch(`${process.env.API_URL}/posts/${postId}`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = response.json()
  return data
}

export default async function page({ params }: { params: { postId: string } }) {
  const postId = params.postId
  const post: Post = await getPost(postId)

  return (
    <HangingContainer>
      <h1>{post.title}</h1>
      <Image
        src={getImg(post.tag.toLowerCase())}
        alt={post.title}
        className='post-img'
        width={2000}
        height={600}
        priority
      />
      <p>
        <span>{post.tag}</span>{' - '}
        <span>{new Date(post.date).toLocaleDateString()}</span>{' - '}
        <span>{post.minutes} min read</span>
      </p>
      <p>{post.content}</p>
    </HangingContainer>
  )
}
