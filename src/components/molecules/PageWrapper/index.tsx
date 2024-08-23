import { PageWrapperProps } from './interfaces.ts';
import { Container } from '../../atoms';

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <Container
    width="100%"
    maxWidth="1280px"
    margin="auto"
    padding='0 24px'
    md={{
      padding: '0'
    }}
  >
    {children}
  </Container>
);