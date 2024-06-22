import { getPost } from '@/actions/get-post'
import { HangingContainer } from '@/components/styled-components/common.styled'
import { PostDetails } from '@/components/styled-components/postPage.styled'
import { GoBack } from '@/components/ui/GoBack'
import { Post } from '@/constants/types'
import { getImg } from '@/lib/img-matcher'
import Image from 'next/image'

export default async function page({ params }: { params: { postId: string } }) {
  const postId = params.postId
  const post: Post = await getPost(postId)

  return (
    <HangingContainer>
      <GoBack />
      <PostDetails>
        <h1 className='post-title'>{post.title}</h1>
        <Image
          src={getImg(post.tag.toLowerCase())}
          alt={post.title}
          className='post-img'
          width={2000}
          height={600}
          priority
        />
        <p className='info-line'>
          <span className='tag'>{post.tag}</span>
          {' • '}
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {' • '}
          <span>{post.minutes} min read</span>
        </p>
        <p>{post.content}</p>
      </PostDetails>
    </HangingContainer>
  )
}
