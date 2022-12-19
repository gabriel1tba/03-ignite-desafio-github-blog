import { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';

import Profile, { GithubUser } from './Profile';
import SearchForm from './SearchForm';

import * as S from './styles';

type RepositoryIssue = {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
};

const Home = () => {
  const [githubUser, setGithubUser] = useState({} as GithubUser);
  const [repositoryIssues, setRepositoryIssues] = useState<RepositoryIssue[]>(
    []
  );

  useEffect(() => {
    const userPromise = api.get<GithubUser>('/users/gabrielitba');
    const repositoryIssuesPromise = api.get<{ items: RepositoryIssue[] }>(
      `search/issues?q=${''}%20repo:gabrielitba/gitsearch`
    );

    Promise.all([userPromise, repositoryIssuesPromise])
      .then(([userResponse, repositoryIssuesResponse]) => {
        setGithubUser(userResponse.data);
        setRepositoryIssues(repositoryIssuesResponse.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <S.Wrapper>
      <Profile githubUser={githubUser} />
      <SearchForm numberPublications={repositoryIssues.length} />
    </S.Wrapper>
  );
};

export default Home;
