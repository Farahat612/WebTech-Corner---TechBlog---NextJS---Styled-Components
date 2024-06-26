'use client'

import styled from 'styled-components'

export const Category = styled.h2`
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 500;
  background-color: var(--primary-Color);
  color: var(--textLight);
  width: fit-content;
  padding: 0 0.8rem;
  margin-bottom: 0.3rem;
  border-radius: 1rem;
  text-transform: uppercase;
`

export const PostTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    transform-origin: left center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const PostDate = styled.span`
  font-size: 0.9rem;
  color: var(--text);
  margin: 0.5rem 0;
`

export const PostMins = styled.span`
  font-size: 0.9rem;
  color: var(--text);
  margin: 0.5rem 0;
`

export const PostDesc = styled.p`
  font-size: 1rem;
  color: var(--text);
  margin: 0.5rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  &.horizontal {
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`

export const PostCard = styled.div`
  .post-box {
    background: var(--bg);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
  }

  .post-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0;

    .dot {
      color: var(--primary-Color);
    }
  }

  .post-img {
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
    width: 100%;
    min-height: 220px;
  }
`
export const HorizontalPostCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-block-start: 1rem;

  .post-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;

    .dot {
      color: var(--primary-Color);
    }
  }

  .post-img {
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
    width: 50%;
    height: auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .post-img {
      width: 100%;
      height: auto;
    }
  }
`
