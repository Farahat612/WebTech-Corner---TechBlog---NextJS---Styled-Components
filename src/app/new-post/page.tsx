import { AddPostContainer } from '@/components/styled-components/addPost.styled'
import { HangingContainer } from '@/components/styled-components/common.styled'
import Section from '@/components/ui/Section'
import CreatePost from './_components/CreatePost'
import { GoBack } from '@/components/ui/GoBack'

export default function page() {
  return (
    <HangingContainer>
      <GoBack />
      <Section>
        <h2 className='heading'>
          Add <span>New</span> Post
        </h2>
      </Section>
      <AddPostContainer>
        <CreatePost />
      </AddPostContainer>
    </HangingContainer>
  )
}
