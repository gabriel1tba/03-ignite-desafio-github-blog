import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 54rem;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 18px;
      line-height: 1.813rem;
      color: ${({ theme }) => theme['base-title']};
    }

    p {
      font-size: 14px;
      line-height: 1.375rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    height: 3.125rem;
    background: ${({ theme }) => theme['base-background']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    font-size: 1rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme['base-label']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`;
