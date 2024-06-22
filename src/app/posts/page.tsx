import { getPosts } from '@/actions/get-posts'
import { PageContainer } from '@/components/styled-components/common.styled'
import Section from '@/components/ui/Section'
import { Post } from '@/constants/types'
import { Posts } from './_components/posts'

export default async function TopicsPage() {
  const posts: Post[] = await getPosts()
  return (
    <PageContainer>
      <div className='page-content'>
        <Section>
          <h2 className='heading'>
            Explore Our <span>Posts</span>
          </h2>

          <Posts posts={posts} />
        </Section>
      </div>
    </PageContainer>
  )
}
