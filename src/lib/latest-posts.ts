import { Post } from '@/constants/types'

export function getMostRecentPosts(posts: Post[]): Post[] {
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
}
