import {
  forwardRef,
  ForwardRefRenderFunction,
  AnchorHTMLAttributes,
  ElementType,
} from 'react';
import { IconType } from 'react-icons';
import { LinkProps } from 'react-router-dom';

import * as S from './styles';

type CustomLinkTypes = AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps;

type CustomLinkProps = {
  rightIcon?: IconType;
  leftIcon?: IconType;
  as?: ElementType;
} & CustomLinkTypes;

const CustomLink: ForwardRefRenderFunction<CustomLinkTypes, CustomLinkProps> = (
  { children, rightIcon: RightIcon, leftIcon: LeftIcon, ...props },
  ref
) => (
  <S.Wrapper ref={ref} {...props}>
    {LeftIcon && <LeftIcon />}
    <span>{children}</span>
    {RightIcon && <RightIcon />}
  </S.Wrapper>
);

export default forwardRef(CustomLink);
