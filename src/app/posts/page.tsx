import { getPosts } from '@/actions/get-posts'
import { PageContainer } from '@/components/styled-components/common.styled'
import Section from '@/components/ui/Section'
import { Post } from '@/constants/types'
import { Posts } from './_components/posts'
import { getSortedPost } from '@/lib/latest-posts'

export const metadata = {
  title: 'WebTech Corner | Posts',
  description:
    'Explore our set of posts on web technologies and software development that will help you improve your coding skills and stay updated with the latest trends in the industry.',
}

export default async function TopicsPage() {
  const posts: Post[] = await getPosts()
  const sortedPosts = getSortedPost(posts)
  return (
    <PageContainer>
      <div className='page-content'>
        <Section>
          <h2 className='heading'>
            Explore Our <span>Posts</span>
          </h2>

          <Posts posts={sortedPosts} />
        </Section>
      </div>
    </PageContainer>
  )
}
