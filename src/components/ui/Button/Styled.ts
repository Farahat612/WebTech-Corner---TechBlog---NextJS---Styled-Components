import styled from 'styled-components'
import { Button_Variants } from '@/constants/types'

export const Container = styled.div<{ $variant: Button_Variants }>`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  outline-color: transparent;
  cursor: pointer;
  font-weight: 500;

  background-color: ${({ $variant }) =>
    $variant === 'primary' ? 'var(--primary-Color)' : 'var(--secondary-Color)'};

  color: ${({ $variant }) =>
    $variant === 'primary' ? 'var(--primary-textColor)' : 'var(--secondary-textColor)'};

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === 'primary'
        ? 'var(--primary-hoverColor)'
        : 'var(--secondary-hoverColor)'};
  }
`
