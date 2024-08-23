import styled from 'styled-components';
import { PageWrapper, Ticket } from '../../molecules';
import { Typography } from '../../atoms';
import { tickets } from '../../../util/constants.ts';

const TicketGrid = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SectionTickets = () => {
  return (
    <PageWrapper>
      <Typography
        as="h2"
        width="100%"
        fontSize={36}
        fontWeight={600}
        textAlign="center"
        mb={32}
        color="white"
      >
        Venta de entradas
      </Typography>
      <TicketGrid>
        {tickets.map(ticket => (
          <Ticket
            key={ticket.name}
            title={ticket.name}
            price={ticket.price}
            image={ticket.icon}
            color={ticket.color}
          />
        ))}
      </TicketGrid>
    </PageWrapper>
  );
};