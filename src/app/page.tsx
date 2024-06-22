import { PageContainer } from '../components/styled-components/styled'

import { getPosts } from '@/actions/get-posts'
import { HorizontalPost } from './_components/horizontal-post'
import { type Post } from '@/constants/types'

const Home = async () => {
  const posts = await getPosts()
  const latestPosts = posts.slice(-5)
  return (
    <PageContainer>
      <h1>Home</h1>
      <p>
        Welcome to our blog! Here you will find interesting articles, tutorials,
        and insights on various topics related to web technologies. Whether you
        are a beginner or an experienced developer, we have something for
        everyone. Stay tuned for regular updates and remember to subscribe to
        our newsletter for the latest news and exclusive content.
      </p>

      <h2>Latest Posts</h2>
      {latestPosts.map((post: Post) => (
        <HorizontalPost key={post.id} post={post} />
      ))}
    </PageContainer>
  )
}

export default Home
