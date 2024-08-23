import { ReactNode } from 'react';
import { ColorValues } from '../../../util/types';

export interface MediaProps {
  as?: string,
  width?: number | string,
  fontSize?: number | string,
  lineHeight?: number | string,
  fontWeight?: 400 | 600 | 700 | string,
  fontFamily?: 'Sora',
  fontStyle?: 'italic' | 'normal' | 'unset',
  textAlign?: 'center' | 'right' | 'left' | 'justify',
  color?: ColorValues,
  margin?: number | string,
  padding?: number | string,
  mt?: number,
  mr?: number,
  mb?: number,
  ml?: number,
  pt?: number,
  pr?: number,
  pb?: number,
  pl?: number,
}

export interface TypographyProps extends MediaProps {
  children: ReactNode,
  sm?: MediaProps,
  md?: MediaProps,
}