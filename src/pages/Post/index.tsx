/* eslint-disable react/no-children-prop */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import api from '../../services/api';

import * as S from './styles';
import IssueInfos from './Profile';

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

const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repositoryIssue, setRepositoryIssue] = useState<RepositoryIssue>(
    {} as RepositoryIssue
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setIsLoading(true);

    api
      .get<RepositoryIssue>(
        `/repos/react-hook-form/react-hook-form/issues/${id}`
      )
      .then((response) => {
        setRepositoryIssue(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <S.Wrapper>
      {isLoading ? (
        <section
          style={{
            marginTop: '4.5rem',
          }}
        >
          <MoonLoader color="#fff" size={80} />
        </section>
      ) : (
        <>
          <IssueInfos
            login={repositoryIssue.user.login}
            title={repositoryIssue.title}
            html_url={repositoryIssue.html_url}
            created_at={repositoryIssue.created_at}
            comments={repositoryIssue.comments}
          />

          <main>
            <p>
              <ReactMarkdown
                // eslint-disable-next-line react/no-children-prop
                children={repositoryIssue.body}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        // eslint-disable-next-line react/no-children-prop
                        children={String(children).replace(/\n$/, '')}
                        style={dracula as any}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
                remarkPlugins={[remarkGfm]}
              />
            </p>
          </main>
        </>
      )}
    </S.Wrapper>
  );
};

export default Post;
