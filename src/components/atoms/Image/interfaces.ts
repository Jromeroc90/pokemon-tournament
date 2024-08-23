import { ReactNode } from 'react';

export interface ImageProps {
  width?: number | string;
  height?: number | string;
  src: ReactNode;
}