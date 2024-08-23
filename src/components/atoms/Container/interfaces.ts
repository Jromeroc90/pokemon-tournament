import { ReactNode } from 'react';
import { AlignValues, ColorValues } from '../../../util/types';

export interface MediaProps {
  display?: 'inline-flex' | 'flex' | 'none';
  position?: 'static' | 'absolute' | 'relative' | 'fixed';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: AlignValues,
  justify?: AlignValues,
  flex?: number,
  width?: number | string,
  height?: number | string,
  minWidth?: number | string,
  minHeight?: number | string,
  maxWidth?: number | string,
  maxHeight?: number | string,
  zIndex?: number;
  gap?: number;
  bgColor?: ColorValues;
  borderWidth?: number,
  borderBottom?: number,
  borderTop?: number,
  borderLeft?: number,
  borderRight?: number,
  borderColor?: ColorValues,
  borderRadius?: number | string,
  margin?: number | string,
  padding?: number | string,
  mt?: number | 'unset',
  mr?: number | 'unset',
  mb?: number | 'unset',
  ml?: number | 'unset',
  pt?: number | 'unset',
  pr?: number | 'unset',
  pb?: number | 'unset',
  pl?: number | 'unset',
}

export interface ContainerProps extends MediaProps {
  children?: ReactNode,
  onClick?: () => void,
  sm?: MediaProps,
  md?: MediaProps,
}