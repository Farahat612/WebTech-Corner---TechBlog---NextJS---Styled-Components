import { PageContainer } from '@/components/styled-components/common.styled'

import { getPosts } from '@/actions/get-posts'
import Section from '@/components/ui/Section'
import { type Post } from '@/constants/types'
import { getSortedPost } from '@/lib/latest-posts'
import { HorizontalPost } from './_components/horizontal-post'

const Home = async () => {
  const posts = await getPosts()
  const recentPosts = getSortedPost(posts).slice(0, 5)
  return (
    <PageContainer>
      <div className='page-content'>
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
          <div className='content'>
            {recentPosts.map((post: Post) => (
              <HorizontalPost key={post.id} post={post} />
            ))}
          </div>
        </Section>
      </div>
    </PageContainer>
  )
}

export default Home
