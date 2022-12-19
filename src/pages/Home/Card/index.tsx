import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNowStrict } from 'date-fns';

import * as S from './styles';

interface CardProps {
  title: string;
  created_at: string;
  body: string;
}

const Card = ({ title, created_at, body }: CardProps) => (
  <S.Wrapper>
    <h2>{title}</h2>
    <time>
      {formatDistanceToNowStrict(new Date(created_at), {
        addSuffix: false,
        locale: ptBR,
      })}
    </time>

    <p>{body}</p>
  </S.Wrapper>
);
export default Card;
