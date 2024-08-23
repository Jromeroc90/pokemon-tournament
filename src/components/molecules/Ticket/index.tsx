import styled from 'styled-components';
import { Container, Typography, Image, Button } from '../../atoms';
import { TicketProps } from './interfaces.ts';
import { useAppDispatch } from '../../../hooks/useStoreActions';
import { addTicket } from '../../../store/cart';

const Card = styled(Container)`
  transition: 0.2s all;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Ticket = ({
  title,
  image,
  price,
  color,
}: TicketProps) => {
  const dispatch = useAppDispatch();

  const handleAddTicket = () => {
    dispatch(addTicket({
      name: title,
      price: price,
    }));
  };

  return (
    <Card
      width="100%"
      borderColor={color}
      borderRadius={8}
      borderWidth={3}
      padding={16}
      bgColor="white"
      sm={{
        width: 320,
      }}
    >
      <Container
        width="100%"
        direction="row"
        justify="space-between"
        mb={16}
      >
        <Container>
          <Typography
            fontSize={32}
            mb={16}
            color={color}
          >
            {title}
          </Typography>

          <Typography fontSize={14} mb={4}>
            Precio:
          </Typography>
          <Typography fontSize={24}>
            $ {price}.00
          </Typography>
        </Container>

        <Image src={image} width={120} alt="Icono Ticket" />
      </Container>

      <Button
        onClick={handleAddTicket}
      >
        Agregar
      </Button>
    </Card>
  );
};