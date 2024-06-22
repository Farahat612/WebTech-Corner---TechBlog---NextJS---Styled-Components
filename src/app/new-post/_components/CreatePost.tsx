'use client'

import { tags } from '@/constants/tags'
import { toast } from 'react-toastify'
import { addPost } from '@/actions/add-post'
import { redirect } from 'next/navigation'

export default function CreatePost() {
  async function onSubmit(formData: FormData) {
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

    const result = await addPost(post)

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success('Post added successfully')
      redirect('/posts')
    }
  }

  return (
    <form action={onSubmit}>
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
      <button type='submit'>Add Post</button>
    </form>
  )
}
