import { IconType } from 'react-icons';
import { LinkProps } from 'react-router-dom';

import * as S from './styles';

interface CustomLinkProps extends LinkProps {
  rightIcon?: IconType;
  leftIcon?: IconType;
}

const CustomLink = ({
  children,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  ...props
}: CustomLinkProps) => (
  <S.Wrapper {...props}>
    {LeftIcon && <LeftIcon />}
    <span>{children}</span>
    {RightIcon && <RightIcon />}
  </S.Wrapper>
);
export default CustomLink;
