'use server'

export const getPosts = async () => {
  const response = await fetch(`${process.env.API_URL}/posts`)

  if (!response.ok) {
    return {
      error: 'Failed to fetch data',
    }
  }

  const data = response.json()
  return data
}
