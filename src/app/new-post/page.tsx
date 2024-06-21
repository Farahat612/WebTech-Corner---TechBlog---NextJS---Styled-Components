import {
  AddPostContainer,
  HangingContainer,
  Section,
} from '@/components/styled-components/styled'
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
