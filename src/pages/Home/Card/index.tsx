import formatDate from '../../../utils/formatDate';

import * as S from './styles';

interface CardProps {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

const Card = ({ id, title, created_at, body }: CardProps) => {
  return (
    <S.Wrapper to={`post/${id}`}>
      <h2>{title}</h2>
      <time>{formatDate(created_at)}</time>

      <p>{body}</p>
    </S.Wrapper>
  );
};

export default Card;
