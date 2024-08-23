import { POKEMON_TOTAL, trainers } from './constants.ts';

export const capitalize = (val: string) => {
  const str = val.split(' ');
  return str.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ');
};

export const randomize = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomPokemonIds = () => {
  const response = [];
  for (let i = 0; i < 6; i++) {
    response.push(randomize(1, POKEMON_TOTAL));
  }
  return response;
}

export const getRandomTrainers = () => {
  const response = [];
  const aux: number[] = [];
  for (let i = 0; i < 10; i++) {
    let repeat = false;
    let trainerId: number;

    do {
      trainerId = randomize(0, 49);
      if (aux.includes(trainerId)) {
        repeat = true;
      } else {
        repeat = false;
        aux.push(trainerId);
      }
    } while (repeat);

    response.push({
      ...trainers[trainerId],
      pokemons: getRandomPokemonIds(),
    });
  }
  return response;
}