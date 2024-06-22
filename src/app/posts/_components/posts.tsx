'use client'

import { tags } from '@/constants/tags'
import { Post as PostType } from '@/constants/types'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import Post from './post'

interface PostsProps {
  posts: PostType[]
}

export const Posts = ({ posts }: PostsProps) => {
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

      {/* Posts Grid */}
      <div
        style={{
          marginTop: '1rem',
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, auto))',
        }}
      >
        {/* Render posts */}
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
