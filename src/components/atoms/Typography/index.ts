import styled from 'styled-components';
import { TypographyProps } from './interfaces';

export const Typography = styled.p<TypographyProps>(props => ({
  width: (typeof props.width === 'string' ? props.width : `${props.width}px`),
  fontSize: props.fontSize,
  lineHeight: props.fontSize === 'inherit' ? '24px' : (typeof props.lineHeight === 'string' ? props.lineHeight : `${props.lineHeight}px`),
  fontWeight: props.fontWeight,
  // fontFamily: props.fontFamily === 'Sora' ? 'var(--sora)' : 'var(--sourceSans3)',
  fontStyle: props.fontStyle,
  textAlign: props.textAlign,
  color: (props.color) ? props.theme.colors[props.color] : 'inherit',
  margin: props.margin,
  padding: props.padding,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
  paddingTop: props.pt,
  paddingRight: props.pr,
  paddingBottom: props.pb,
  paddingLeft: props.pl,

  ...(props.sm && ({
    '@media only screen and (width > 768px)': {
      fontSize: props.sm.fontSize,
      lineHeight: typeof props.sm.lineHeight === 'string' ? props.sm.lineHeight : `${props.sm.lineHeight}px`,
      fontWeight: props.sm.fontWeight,
      textAlign: props.sm.textAlign,
      margin: props.sm.margin,
      padding: props.sm.padding,
      marginTop: props.sm.mt,
      marginRight: props.sm.mr,
      marginBottom: props.sm.mb,
      marginLeft: props.sm.ml,
      paddingTop: props.sm.pt,
      paddingRight: props.sm.pr,
      paddingBottom: props.sm.pb,
      paddingLeft: props.sm.pl,
    }
  })),
  ...(props.md && ({
    '@media only screen and (width > 992px)': {
      fontSize: props.md.fontSize,
      lineHeight: props.md.lineHeight,
      fontWeight: props.md.fontWeight,
      textAlign: props.md.textAlign,
      margin: props.md.margin,
      padding: props.md.padding,
      marginTop: props.md.mt,
      marginRight: props.md.mr,
      marginBottom: props.md.mb,
      marginLeft: props.md.ml,
      paddingTop: props.md.pt,
      paddingRight: props.md.pr,
      paddingBottom: props.md.pb,
      paddingLeft: props.md.pl,
    }
  })),
}));

Typography.defaultProps = {
  width: 'auto',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'inherit',
  fontFamily: 'Sora',
  fontStyle: 'unset',
  textAlign: 'left',
  color: 'textBlack',
  margin: 0,
  padding: 0,
};
