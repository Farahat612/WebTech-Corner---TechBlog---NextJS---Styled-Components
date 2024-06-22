import { getPost } from '@/actions/get-post'
import { HangingContainer } from '@/components/styled-components/common.styled'
import { Post } from '@/constants/types'
import { getImg } from '@/lib/img-matcher'
import Image from 'next/image'

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
        <span>{post.tag}</span>
        {' - '}
        <span>{new Date(post.date).toLocaleDateString()}</span>
        {' - '}
        <span>{post.minutes} min read</span>
      </p>
      <p>{post.content}</p>
    </HangingContainer>
  )
}
