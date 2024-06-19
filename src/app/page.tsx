'use client'
import { Hero } from './_components/hero'
import { Navbar } from './_components/navbar'
import { PageContainer } from './_components/styled'

const Home = () => {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
    </PageContainer>
  )
}

export default Home
