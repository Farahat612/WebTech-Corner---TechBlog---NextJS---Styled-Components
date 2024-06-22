import { HorizontalPostCard } from '@/components/styled-components/styled'
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
        <h2 className='category'>{post.tag}</h2>
        <Link href={`/posts/${post.id}`}>
          <h3 className='post-title'>{post.title}</h3>
        </Link>
        <p>
          <span className='post-date'>
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span>
            <span> • </span>
            <span className='post-mins'>{post.minutes} min read</span>
          </span>
        </p>
        <p className='post-desc'>{post.content}</p>
      </div>
    </HorizontalPostCard>
  )
}
