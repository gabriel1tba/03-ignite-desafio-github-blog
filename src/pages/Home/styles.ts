import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Profile = styled.div`
  display: flex;
  margin-top: -6rem;
  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};

  position: relative;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 2rem;
    gap: 0.5rem;

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
      color: ${({ theme }) => theme['base-title']};
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${({ theme }) => theme['base-text']};
    }
  }

  > a {
    position: absolute;
    top: 2rem;
    right: 2.5rem;
  }
`;

export const SocialInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  span {
    color: ${({ theme }) => theme['base-subtitle']};
  }

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      fill: ${({ theme }) => theme['base-label']};
    }
  }
`;
