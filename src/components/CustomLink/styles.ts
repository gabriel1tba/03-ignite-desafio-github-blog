import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.188rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  :hover {
    border-color: ${({ theme }) => theme.blue};
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
    flex: none;
  }

  svg + span {
    margin-left: 0.25rem;
  }

  span + svg {
    margin-left: 0.25rem;
  }
`;
