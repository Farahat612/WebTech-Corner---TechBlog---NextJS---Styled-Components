'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { Post } from '@/constants/types'
import Link from 'next/link'

interface PostsProps {
  posts: Post[]
}

export const Posts = ({ posts }: PostsProps) => {
  const tags = [
    'All',
    'Frontend',
    'ReactJS',
    'Backend',
    'JavaScript',
    'TailwindCSS',
  ]

  const searchParams = useSearchParams()
  const pathname = usePathname()

  // Get the selected tag from URL or default to 'All'
  const selectedTagFromUrl = searchParams.get('tag') || 'All'

  const [selectedTag, setSelectedTag] = useState(selectedTagFromUrl)

  // Update the state when the URL parameter changes
  useEffect(() => {
    setSelectedTag(selectedTagFromUrl)
  }, [selectedTagFromUrl])

  // Function to handle tag click
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set('tag', tag)
    const newUrl = `${pathname}?${newParams.toString()}`
    window.history.pushState({}, '', newUrl)
  }

  // Filter posts based on the selected tag
  const filteredPosts =
    selectedTag === 'All'
      ? posts
      : posts.filter((post) => post.tag === selectedTag)

  return (
    <div>
      <div>
        {/* Tags navigation */}
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem 0',
          }}
        >
          {tags.map((tag) => (
            <li
              key={tag}
              style={{
                cursor: 'pointer',
              }}
              onClick={() => handleTagClick(tag)}
            >
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* Render posts */}
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.tag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
