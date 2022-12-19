import { useState, useEffect } from 'react';

import Profile, { GithubUser } from './Profile';

import * as S from './styles';

const Home = () => {
  const [githubUser, setGithubUser] = useState({} as GithubUser);

  useEffect(() => {
    fetch('https://api.github.com/users/gabrielitba')
      .then((response) => response.json())
      .then((data) => setGithubUser(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <S.Wrapper>
      <Profile githubUser={githubUser} />
    </S.Wrapper>
  );
};

export default Home;
