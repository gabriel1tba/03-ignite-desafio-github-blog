import { useState, useEffect, useCallback, FormEvent } from 'react';
import api from '../../services/api';

import Profile, { GithubUser } from './Profile';
import SearchForm from './SearchForm';
import Card from './Card';

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
      `search/issues?q=""%20repo:gabrielitba/gitsearch`
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

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const inputValue = event.currentTarget.search.value.trim();

      api
        .get<{ items: RepositoryIssue[] }>(
          `search/issues?q=${inputValue}%20repo:gabrielitba/gitsearch`
        )
        .then((response) => {
          setRepositoryIssues(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    []
  );

  return (
    <S.Wrapper>
      <Profile githubUser={githubUser} />
      <SearchForm
        onSubmit={handleSubmit}
        numberPublications={repositoryIssues.length}
      />

      <S.CardList>
        {Boolean(repositoryIssues.length) &&
          repositoryIssues.map((issue) => (
            <Card
              key={issue.number}
              title={issue.title}
              created_at={issue.created_at}
              body={issue.body}
            />
          ))}
      </S.CardList>
    </S.Wrapper>
  );
};

export default Home;
