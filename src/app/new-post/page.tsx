import {
  AddPostContainer,
  HangingContainer,
} from '@/components/styled-components/addPost.styled'
import CreatePost from './_components/CreatePost'
import Section from '@/components/ui/Section'

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
