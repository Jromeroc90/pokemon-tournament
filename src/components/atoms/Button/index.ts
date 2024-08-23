import styled from 'styled-components';
import { ButtonProps } from './interfaces';

export const Button = styled.button<ButtonProps>(props => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '24px',
  border: 'none',
  padding: '8px 16px',
  borderRadius: 8,
  cursor: 'pointer',
  transition: '0.2s all',
  whiteSpace: 'nowrap',
  gap: 8,
  color: props.theme.colors.white,
  backgroundColor: props.theme.colors.primary,
  margin: props.margin,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,

  '&:hover': {
    color: props.theme.colors.white,
    backgroundColor: props.theme.colors.primaryHover,
  }
}));