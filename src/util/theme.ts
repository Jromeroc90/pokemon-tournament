import { createGlobalStyle } from 'styled-components';

const THEME = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    textLight: '#F9FAFC',
    textBlack: '#0F0C0C',
    grey: '#C2C2C2',
    primary: '#ED1C24',
    secondary: '#384AC4',
    yellow: '#ECD525',
    crystal: '#AEB8DA',
    emerald: '#6B976A',
    primaryHover: '#B32A0A',
  },
};

export const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: "Flexo";
    src:local("Flexo-Regular"),
    url('./assets/fonts/Flexo-Regular.ttf')
  }
  
  body {
    margin: 0;
    font-family: 'Flexo', 'sans-serif';
    
    button {
      font-family: 'Flexo', 'sans-serif';
    }
    
    a {
      text-decoration: none;
    }
  }
  * {
    box-sizing: border-box;
  }
`;

export const colorValues = Object.keys(THEME.colors);

export default THEME;