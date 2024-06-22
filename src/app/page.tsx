import { PageContainer } from '@/components/styled-components/common.styled'

import { getPosts } from '@/actions/get-posts'
import { HorizontalPost } from './_components/horizontal-post'
import { type Post } from '@/constants/types'
import Section from '@/components/ui/Section'

const Home = async () => {
  const posts = await getPosts()
  const latestPosts = posts.slice(-5)
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
        <div className='content'>
          {latestPosts.map((post: Post) => (
            <HorizontalPost key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </PageContainer>
  )
}

export default Home
