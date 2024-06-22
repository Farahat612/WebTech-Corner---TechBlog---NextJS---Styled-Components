'use client'

import { addPost } from '@/actions/add-post'
import { tags } from '@/constants/tags'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function CreatePost() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get('title') as string
    const tag = formData.get('tag') as string
    const content = formData.get('content') as string

    if (!title || !tag || !content) {
      toast.error('Please fill out all fields')
      return
    }

    const post = {
      title,
      tag,
      content,
    }

    setIsLoading(true)
    const result = await addPost(post)
    if (result?.error) {
      toast.error(result.error)
      setIsLoading(false)
    } else {
      toast.success('Post added successfully')
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {/* Post Title */}
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' />
      </div>

      {/* Post Tag */}
      <div>
        <label htmlFor='tag'>Tag</label>
        <select id='tag' name='tag'>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Post Content */}
      <div>
        <label htmlFor='content'>Content</label>
        <textarea id='content' name='content' rows={15} />
      </div>

      {/* Submit Button */}
      <div>
        <button disabled={isLoading} className='submit' type='submit'>
          {isLoading ? 'Adding Post...' : 'Add Post'}
        </button>
      </div>
    </form>
  )
}
