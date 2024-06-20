async function getPost(postId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = response.json()
  return data
}

export default async function page({ params }: { params: { postId: string } }) {
  const postId = params.postId
  const post = await getPost(postId)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
