import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IActionAdd {
  name: string;
  price: number;
}

interface ITickets {
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  open: boolean;
  total: number;
  tickets: ITickets[];
}

const initialState: CartState = {
  open: false,
  total: 0,
  tickets: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state: CartState) => {
      state.open = true;
    },
    closeCart: (state: CartState) => {
      state.open = false;
    },
    resetCart: (state: CartState) => {
      state.tickets = [];
      state.total = 0;
    },
    addTicket: (state: CartState, action: PayloadAction<IActionAdd>) => {
      const alreadyAdded = state.tickets.find(ticket => ticket.name === action.payload.name);

      if (alreadyAdded) {
        alreadyAdded.quantity += 1;
      } else {
        state.tickets = [
          ...state.tickets,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      state.total += action.payload.price;
    },
    subtractTicket: (state: CartState, action: PayloadAction<string>) => {
      const selectedTicket = state.tickets.find(ticket => ticket.name === action.payload);

      if (selectedTicket) {
        if (selectedTicket.quantity >= 2) {
          selectedTicket.quantity -= 1;
        } else {
          state.tickets.splice(state.tickets.indexOf(selectedTicket), 1);
        }

        state.total -= selectedTicket.price;
      }
    },
    deleteTicket: (state: CartState, action: PayloadAction<string>) => {
      const ticket = state.tickets.find(ticket => ticket.name === action.payload);

      if (ticket) {
        state.tickets.splice(state.tickets.indexOf(ticket), 1);
        state.total -= ticket.price*ticket.quantity;
      }
    }
  }
});

export const { openCart, closeCart, addTicket, subtractTicket, deleteTicket, resetCart } = cartSlice.actions;

export default cartSlice.reducer;