import { IconContext } from 'react-icons';
import { FaTrashCan } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { Button, Container, Typography } from '../../atoms';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreActions.ts';
import { addTicket, deleteTicket, resetCart, subtractTicket } from '../../../store/cart';
import { useState } from 'react';

export const TicketResume = () => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector(state => state.cart.tickets);
  const total = useAppSelector(state => state.cart.total);

  const [loading, setLoading] = useState(false);

  const handleDeleteTicket = (name: string) => {
    dispatch(deleteTicket(name));
  };

  const handleAddTicket = (name: string, price: number) => {
    dispatch(addTicket({
      name,
      price,
    }));
  };

  const handleSubtractTicket = (name: string) => {
    dispatch(subtractTicket(name))
  };

  const handleBuyTickets = () => {
    setLoading(true);

    setTimeout(() => {
      alert('¡Pago realizado!');
      dispatch(resetCart());
      setLoading(false);
    }, 3000);
  }

  return (
    <Container
      width="100%"
      gap={16}
    >
      {tickets.map((ticket) => (
        <Container
          key={ticket.name}
          width="100%"
          borderBottom={1}
          borderColor='grey'
          pb={16}
          pt={16}
        >
          <Container
            width="100%"
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography
              fontSize={24}
              mb={16}
            >
              {ticket.name}
            </Typography>

            <div onClick={() => handleDeleteTicket(ticket.name)}>
              <FaTrashCan />
            </div>

          </Container>

          <Container
            width="100%"
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography>
              Precio Unid.:
            </Typography>
            <Typography fontSize={24}>
              ${ticket.price}
            </Typography>
          </Container>

          <Container
            width="100%"
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography>
              Cantidad:
            </Typography>
            <Container alignItems="center" direction="row">
              <IconContext.Provider value={{ size: "24px", style: { cursor: "pointer" } }}>
                <CiCircleMinus onClick={() => handleSubtractTicket(ticket.name)}/>
                <Typography fontSize={24} padding='0 8px'>
                  {ticket.quantity}
                </Typography>
                <CiCirclePlus onClick={() => handleAddTicket(ticket.name, ticket.price)} />
              </IconContext.Provider>
            </Container>
          </Container>
        </Container>
      ))}

      <Container
        width="100%"
        direction="row"
        justify="space-between"
        alignItems="center"
        mt={16}
        mb={16}
      >
        <Typography>
          Total:
        </Typography>
        <Typography fontSize={24}>
          ${total}
        </Typography>
      </Container>

      <Button
        disabled={loading}
        onClick={handleBuyTickets}
      >
        {loading ? 'Pagando...' : 'Pagar'}
      </Button>
    </Container>
  );
};