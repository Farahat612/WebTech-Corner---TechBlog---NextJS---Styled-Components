'use client'

import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  min-height: 100vh;
  width: 100%;
  background-color: var(--bg);
  position: relative;
`

export const Text = styled.p`
  color: var(--text);
  padding: 2rem 0;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
    width: 60%;
  }
`

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: var(--textLight);
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .active {
      color: var(--primary-Color);
    }

    li .link:hover {
      color: var(--primary-Color);
    }
  }
`

export const HeroSection = styled.section`
  width: 100%;
  min-height: 25rem;
  background-color: var(--secondary-Color);
  color: var(--textLight);
  display: grid;
  place-items: center;
  justify-content: center;

  .hero-text {
    display: flex;
    max-width: 70vw;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    text-transform: uppercase;

    .title {
      font-size: 2rem;
      span {
        color: var(--primary-Color);
      }
    }

    .subtitle {
      font-size: 1.2rem;
      color: var(--textLight);
    }
  }
`

export const PostCard = styled.div`
  .post-box {
    background: var(--bg);
    box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
    overflow: hidden;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .post-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
  }

  .category {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--primary-Color);
    text-transform: uppercase;
  }

  .post-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .post-date {
    font-size: 0.9rem;
    color: var(--text);
    margin: 0.5rem 0;
  }

  .post-desc {
    font-size: 1rem;
    color: var(--text);
    margin: 0.5rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export const PostDetailsContainer = styled.div`
  background-color: var(--textLight);
  max-width: 85vw;
  padding: 2rem;
  margin: -15rem auto 2rem;
  margin-top: -15rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  position: relative;

  .post-img {
    border-radius: 0.5rem;
    width: 100%;
    height: auto;
    position: relative;
  }
`