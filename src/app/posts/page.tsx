import { PageContainer } from '@/components/styled-components/common.styled'
import Section from '@/components/ui/Section'
import { Posts } from './_components/posts'
import { Post } from '@/constants/types'
import { getPosts } from '@/actions/get-posts'
import { Suspense } from 'react'
import LoadingSkeleton from '@/components/ui/Loading'

export default async function TopicsPage() {
  const posts: Post[] = await getPosts()
  return (
    <PageContainer>
      <Section>
        <h2 className='heading'>
          Explore Our <span>Posts</span>
        </h2>

        <Suspense fallback={<LoadingSkeleton />}>
          <Posts posts={posts} />
        </Suspense>
      </Section>
    </PageContainer>
  )
}
