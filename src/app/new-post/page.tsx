import {
  AddPostForm,
  HangingContainer,
  Section,
} from '@/components/styled-components/styled'

import { tags } from '@/constants/tags'

export default function page() {
  return (
    <HangingContainer>
      <Section>
        <h2 className='heading'>
          Add <span>New</span> Post
        </h2>
        <AddPostForm>
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
            <textarea id='content' name='content' />
          </div>

          {/* Submit Button */}
          <button type='submit'>Add Post</button>
        </AddPostForm>
      </Section>
    </HangingContainer>
  )
}
