import styled from 'styled-components';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreActions.ts';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { closeCart } from '../../../store/cart';
import { CartProps } from '../interfaces.ts';
import { Container, TicketResume, Typography } from '../../../components';
import { IconContext } from 'react-icons';

const Overlay = styled.div<CartProps>`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.4s;
  overflow: hidden;
  z-index: ${props => props.active ? '900' : '-1'};
  background-color: ${props => props.active ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
`

const CartResumeContainer = styled.div<CartProps>`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  padding: 24px 16px;
  right: ${props => props.active ? '0' : '-100%'};
  transition: all 0.4s;
  background-color: ${props => props.theme.colors.white};

  @media only screen and (width > 768px) {
    width: 400px;
  }
`

const CartResume = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);

  const ref = useOutsideClick(() => {
    dispatch(closeCart());
  })

  return (
    <Overlay active={cart.open}>
      <CartResumeContainer
        ref={ref}
        active={cart.open}
      >
        <Container
          width='100%'
          direction="row"
          justify="space-between"
          alignItems="center"
          mb={32}
        >
          <Typography
            fontSize={24}
            fontWeight={600}
          >
            Resumen de compras
          </Typography>
          <IconContext.Provider value={{ size: "32px" }}>
            <IoMdCloseCircleOutline onClick={() => dispatch(closeCart())} />
          </IconContext.Provider>
        </Container>
        {cart.tickets.length > 0 ? (
          <TicketResume/>
        ) : (
          <Typography
            fontSize={18}
            textAlign='center'
          >
            Aún no tiene entradas en su carrito
          </Typography>
        )}
      </CartResumeContainer>
    </Overlay>
  );
};

export default CartResume;