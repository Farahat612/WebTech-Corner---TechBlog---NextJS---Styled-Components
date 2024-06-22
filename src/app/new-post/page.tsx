import { AddPostContainer } from '@/components/styled-components/addPost.styled'
import { HangingContainer } from '@/components/styled-components/common.styled'
import Section from '@/components/ui/Section'
import CreatePost from './_components/CreatePost'

export default function page() {
  return (
    <HangingContainer>
      <Section>
        <h2 className='heading'>
          Add <span>New</span> Post
        </h2>
        <AddPostContainer>
          <CreatePost />
        </AddPostContainer>
      </Section>
    </HangingContainer>
  )
}
