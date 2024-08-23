import { ReactNode } from 'react';
import { ColorValues } from '../../../util/types.ts';

export interface TicketProps {
  title: string;
  image: ReactNode,
  price: number;
  color: ColorValues;
}