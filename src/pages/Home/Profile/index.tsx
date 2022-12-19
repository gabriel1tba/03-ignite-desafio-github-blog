import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa';

import CustomLink from '../../../components/CustomLink';

import * as S from './styles';

export interface GithubUser {
  name: string;
  avatar_url: string;
  bio: string;
  login: string;
  company: string;
  following: number;
  html_url: string;
}

interface ProfileProps {
  githubUser: GithubUser;
}

const Profile = ({ githubUser }: ProfileProps) => (
  <S.Wrapper>
    <img src='https://github.com/gabrielitba.png' />

    <div>
      <h1>{githubUser.name}</h1>
      <p>{githubUser.bio}</p>

      <S.SocialInfo>
        <div>
          <FaGithub />
          <span>{githubUser.login}</span>
        </div>

        <div>
          <FaBuilding />
          <span>{githubUser.company}</span>
        </div>

        <div>
          <FaUserFriends />
          <span>{`${githubUser.following} ${
            githubUser.following > 1 ? 'seguidores' : 'seguidor'
          }`}</span>
        </div>
      </S.SocialInfo>
    </div>
    <CustomLink
      href={githubUser.html_url}
      target='_blank'
      rel='noopener noreferrer'
      rightIcon={HiArrowTopRightOnSquare}
      as='a'
    >
      Github
    </CustomLink>
  </S.Wrapper>
);

export default Profile;
