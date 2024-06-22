'use client'

import styled from 'styled-components'

export const Category = styled.h2`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary-Color);
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

  &.horizontal {
    font-size: 1.5rem;
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
    box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
    overflow: hidden;
    border-radius: 0.5rem;
    padding: 1rem;
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
  box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
  border-radius: 0.5rem;
  overflow: hidden;
  margin-block-start: 1rem;

  .post-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }

  .post-img {
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
    width: 50%;
    height: auto;
  }
`
