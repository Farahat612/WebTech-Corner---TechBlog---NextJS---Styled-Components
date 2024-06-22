import { Post } from '@/constants/types'

export function getSortedPost(posts: Post[]): Post[] {
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
}
