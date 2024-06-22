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
  padding: 2rem;
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
  position: absolute;
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
    min-height: 220px;
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

  .post-date,
  .post-mins {
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

export const HangingContainer = styled.div`
  background-color: var(--bg);
  max-width: 85vw;
  min-height: 40vh;
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  background-color: var(--bg);
  color: var(--text);

  .heading {
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--text);

    span {
      color: var(--primary-Color);
    }
  }
`

export const AddPostContainer = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* Fields styles */
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 1.2rem;
        color: var(--text);
      }

      input,
      select,
      textarea {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid var(--text);
        border-radius: 0.5rem;
      }

      textarea {
        resize: vertical;
      }
    }

    button {
      padding: 0.5rem;
      font-size: 1rem;
      background-color: var(--primary-Color);
      color: var(--secondary-Color);
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`

export const HorizontalPostCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg);
  box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
  border-radius: 0.5rem;
  overflow: hidden;

  .post-img {
    width: 50%;
    height: auto;
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
  }

  .post-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;

    .category {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--primary-Color);
      text-transform: uppercase;
    }

    .post-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text);
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .post-date,
    .post-mins {
      font-size: 0.9rem;
      color: var(--text);
    }

    .post-desc {
      font-size: 0.9rem;
      margin-top: 1rem;
      color: var(--text);
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`
