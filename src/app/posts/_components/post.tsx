import {
  PostCard,
  Category,
  PostTitle,
  PostDate,
  PostMins,
  PostDesc,
} from '@/components/styled-components/postCard.styled'
import { type Post } from '@/constants/types'
import { getImg } from '@/lib/img-matcher'
import Image from 'next/image'
import Link from 'next/link'

export default function Post({ post }: { post: Post }) {
  return (
    <PostCard>
      <div className='post-box'>
        {/* IMG */}
        <Image
          src={getImg(post.tag.toLowerCase())}
          alt={post.title}
          className='post-img'
          width={300}
          height={200}
          priority
        />

        <div className='post-info'>
          {/* TAG */}
          <Category>{post.tag}</Category>
          <Link href={`/posts/${post.id}`}>
            <PostTitle>{post.title}</PostTitle>
          </Link>
          <p>
            <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
            <span>
              <span className='dot'> • </span>
              <PostMins>{post.minutes} min read</PostMins>
            </span>
          </p>
          <PostDesc>{post.content}</PostDesc>
        </div>
      </div>
    </PostCard>
  )
}
