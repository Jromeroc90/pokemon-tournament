import styled from 'styled-components';
import { ImageProps } from './interfaces.ts';

export const Image = styled.img<ImageProps>`
  width: ${props => typeof props.width === 'number' ? `${props.width}px` : props.width};
  height: ${props => typeof props.height === 'number' ? `${props.height}px` : props.height};
`

Image.defaultProps = {
  width: 'auto',
  height: 'auto',
};