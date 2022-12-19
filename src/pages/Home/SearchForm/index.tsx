import * as S from './styles';

interface SearchFormProps {
  numberPublications: number;
}

const SearchForm = ({ numberPublications }: SearchFormProps) => {
  return (
    <S.Wrapper>
      <div>
        <h2>Publicações</h2>
        <p>{numberPublications} Publicações</p>
      </div>
      <input placeholder='Buscar conteúdo' type='text' />
    </S.Wrapper>
  );
};

export default SearchForm;
