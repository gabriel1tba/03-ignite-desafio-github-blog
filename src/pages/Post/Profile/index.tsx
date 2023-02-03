import { HiChevronLeft, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import { BsCalendarFill, BsChatFill } from 'react-icons/bs';

import formatDate from '../../../utils/formatDate';

import CustomLink from '../../../components/CustomLink';

import * as S from './styles';

interface IssueInfosProps {
  login: string;
  title: string;
  html_url: string;
  created_at: string;
  comments: number;
}

const IssueInfos = ({
  login,
  title,
  html_url,
  created_at,
  comments,
}: IssueInfosProps) => (
  <S.Wrapper>
    <CustomLink to="/" leftIcon={HiChevronLeft}>
      VOLTAR
    </CustomLink>

    <CustomLink
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      rightIcon={HiArrowTopRightOnSquare}
      as="a"
    >
      VER NO GITHUB
    </CustomLink>
    <div>
      <h1>{title}</h1>

      <S.SocialInfo>
        <div>
          <FaGithub />
          <span>{login}</span>
        </div>

        <div>
          <BsCalendarFill />
          <span>{formatDate(created_at)}</span>
        </div>

        <div>
          <BsChatFill />
          <span>{comments} comentários</span>
        </div>
      </S.SocialInfo>
    </div>
  </S.Wrapper>
);

export default IssueInfos;
