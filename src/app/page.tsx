import { PageContainer } from '@/components/styled-components/common.styled'

import { getPosts } from '@/actions/get-posts'
import { HorizontalPost } from './_components/horizontal-post'
import { type Post } from '@/constants/types'
import Section from '@/components/ui/Section'
import { Suspense } from 'react'
import LoadingSkeleton from '@/components/ui/Loading'

const Home = async () => {
  const posts = await getPosts()

  // Function to get the most recent 5 posts
  function getMostRecentPosts(posts: Post[]): Post[] {
    return posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
  }

  const recentPosts = getMostRecentPosts(posts)
  return (
    <PageContainer>
      <Section>
        <h1 className='heading'>About Us</h1>
        <div className='content'>
          <p>
            Welcome to our blog! Here you will find interesting articles,
            tutorials, and insights on various topics related to web
            technologies. Whether you are a beginner or an experienced
            developer, we have something for everyone. Stay tuned for regular
            updates and remember to subscribe to our newsletter for the latest
            news and exclusive content.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className='heading'>
          Most <span>Recent</span> Posts
        </h2>
        <Suspense fallback={<LoadingSkeleton />}>
          <div className='content'>
            {recentPosts.map((post: Post) => (
              <HorizontalPost key={post.id} post={post} />
            ))}
          </div>
        </Suspense>
      </Section>
    </PageContainer>
  )
}

export default Home
