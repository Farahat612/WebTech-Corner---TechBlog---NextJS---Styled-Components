import { PageContainer } from '@/components/styled-components/styled'
import Section from '@/components/ui/Section'
import { Posts } from './_components/posts'
import { Post } from '@/constants/types'

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = response.json()
  return data
}

export default async function TopicsPage() {
  const posts: Post[] = await getPosts()
  return (
    <PageContainer>
      <Section>
        <h2 className='heading'>
          Explore Our <span>Topics</span>
        </h2>

        <Posts posts={posts} />
      </Section>
    </PageContainer>
  )
}
