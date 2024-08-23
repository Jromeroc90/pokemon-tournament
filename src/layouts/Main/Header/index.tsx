import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { IoCartSharp } from "react-icons/io5";
import { Container } from '../../../components';
import Logo from '../../../assets/pokemon_logo.png';
import { useAppDispatch } from '../../../hooks/useStoreActions.ts';
import { openCart } from '../../../store/cart';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 8px 0;
  // background-color: ${props => props.theme.colors.white};
  background-color: transparent;
`;

const Image = styled.img`
  width: 80px
`

const Header = () => {
  const dispatch = useAppDispatch();

  const handleOpenCart = () => dispatch(openCart());

  return (
    <HeaderContainer>
      <Container
        maxWidth="1280px"
        margin="auto"
        padding='0 24px'
        md={{
          padding: '0'
        }}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Image src={Logo} alt="Torneo Pókemon" />

        <div onClick={handleOpenCart}>
          <IconContext.Provider
            value={{
              size: "32px",
              style: {
                cursor: "pointer",
                color: "white",
              },
            }}
          >
            <IoCartSharp />
          </IconContext.Provider>
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;