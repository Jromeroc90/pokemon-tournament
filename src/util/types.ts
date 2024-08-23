import THEME from './theme.ts';

export type ColorValues = keyof typeof THEME.colors;
export type AlignValues = 'flex-start' | 'flex-end' | 'center' | 'space-between'

export type RegionDTO = {
  name: string;
  url: string;
}