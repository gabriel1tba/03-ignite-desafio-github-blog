import * as S from './styles';

interface SearchFormProps {
  numberPublications: number;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm = ({ numberPublications, onSubmit }: SearchFormProps) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      <div>
        <h2>Publicações</h2>
        <p>{numberPublications} Publicações</p>
      </div>
      <input name="search" placeholder="Buscar conteúdo" type="text" />
    </S.Wrapper>
  );
};

export default SearchForm;
