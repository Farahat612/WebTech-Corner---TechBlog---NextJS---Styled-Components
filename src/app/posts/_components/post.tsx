import { PostCard } from '@/components/styled-components/styled'
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
        {/* TAG */}
        <h2 className='category'>{post.tag}</h2>
        <Link href={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <span className='post-date'>
          {new Date(post.date).toLocaleDateString()}
        </span>
        <p className='post-desc'>{post.content}</p>
      </div>
    </PostCard>
  )
}
