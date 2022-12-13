import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa';

import CustomLink from '../../components/CustomLink';

import * as S from './styles';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Profile>
        <img src='https://github.com/gabrielitba.png' />

        <div>
          <h1>Gabriel Ferreira</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <S.SocialInfo>
            <div>
              <FaGithub />
              <span>gabrielitba</span>
            </div>

            <div>
              <FaBuilding />
              <span>Pecege</span>
            </div>

            <div>
              <FaUserFriends />
              <span>32 eguidores</span>
            </div>
          </S.SocialInfo>
        </div>
        <CustomLink to='/' rightIcon={HiArrowTopRightOnSquare}>
          Github
        </CustomLink>
      </S.Profile>
    </S.Wrapper>
  );
};

export default Home;
