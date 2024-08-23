import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
  onClick: () => void,
  margin?: number | string,
  mt?: number,
  mr?: number,
  mb?: number,
  ml?: number,
}