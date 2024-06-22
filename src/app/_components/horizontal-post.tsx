import {
  HorizontalPostCard,
  Category,
  PostTitle,
  PostDate,
  PostMins,
  PostDesc,
} from '@/components/styled-components/postCard.styled'
import Image from 'next/image'
import React from 'react'
import { getImg } from '@/lib/img-matcher'
import { type Post } from '@/constants/types'
import Link from 'next/link'

export const HorizontalPost = ({ post }: { post: Post }) => {
  return (
    <HorizontalPostCard>
      <Image
        src={getImg(post.tag.toLowerCase())}
        alt={post.title}
        className='post-img'
        width={300}
        height={200}
        priority
      />

      <div className='post-info'>
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
        <PostDesc className='horizontal'>{post.content}</PostDesc>
      </div>
    </HorizontalPostCard>
  )
}
