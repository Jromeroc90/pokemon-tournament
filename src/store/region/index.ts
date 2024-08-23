import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRandomTrainers } from '../../util/functions.ts';

// interface IPokemon {
//   id: number;
//   name: string;
//   image: string;
// }

export interface ITrainers {
  id: number;
  name: string;
  pokemons: number[];
}

interface IRegion {
  name: string;
  trainers: ITrainers[];
}

interface RegionState {
  selected: string;
  regions: {
    [key: string]: IRegion,
  },
}

const initialState: RegionState = {
  selected: '',
  regions: {},
}

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    selectRegion: (state: RegionState, action: PayloadAction<string>) => {
      if (!state.regions[action.payload]) {
        state.regions[action.payload] = {
          name: action.payload,
          trainers: getRandomTrainers(),
        };
      }

      state.selected = action.payload;
    },
  }
});

export const { selectRegion } = regionSlice.actions;

export default regionSlice.reducer;