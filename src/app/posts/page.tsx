import { PageContainer } from '@/components/styled-components/common.styled'
import Section from '@/components/ui/Section'
import { Posts } from './_components/posts'
import { Post } from '@/constants/types'
import { getPosts } from '@/actions/get-posts'

export default async function TopicsPage() {
  const posts: Post[] = await getPosts()
  return (
    <PageContainer>
      <Section>
        <h2 className='heading'>
          Explore Our <span>Posts</span>
        </h2>

        <Posts posts={posts} />
      </Section>
    </PageContainer>
  )
}
