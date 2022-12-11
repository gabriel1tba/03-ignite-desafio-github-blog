import * as S from './styles';

import headerCover from '../../assets/cover.svg';

const Header = () => {
  return (
    <S.Wrapper>
      <img src={headerCover}></img>
    </S.Wrapper>
  );
};

export default Header;
