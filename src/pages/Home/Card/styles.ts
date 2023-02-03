import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 53px;
  width: 26rem;
  height: 16.25rem;
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  gap: 1rem;
  border: 2px solid transparent;
  transition: border-color 0.2s;
  text-decoration: none;
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme['base-label']};
  }

  h2 {
    font-size: 1.25rem;
    line-height: 2rem;
    color: ${({ theme }) => theme['base-title']};
  }

  time {
    font-size: 14px;
    line-height: 1.375rem;
    color: ${({ theme }) => theme['base-span']};
  }

  p {
    grid-column: 1/3;
    font-size: 1rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme['base-text']};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
