import styled from 'styled-components';
import { MainLayoutProps } from './interfaces.ts';
import { Container } from '../../components';
import Header from './Header';
import CartResume from './CartResume';

const MainContainer = styled.div`
  background: #424242 url('./src/assets/pokemon_bg.png');
  width: 100%;
  min-height: 100vh;
`;

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainContainer>
      <Header />
      <CartResume />
      <Container
        width='100%'
        maxWidth="1280px"
        margin="auto"
        padding='56px 24px 0'
        md={{
          padding: '56px 0 0'
        }}
      >
        {children}
      </Container>
    </MainContainer>
  );
};

export default MainLayout;