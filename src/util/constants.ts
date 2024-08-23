import Pikachu from '../assets/pikachu.png';
import Rayquaza from '../assets/rayquaza.png';
import Suicune from '../assets/suicune.png';
import { ReactNode } from 'react';
import { ColorValues } from './types.ts';

interface ITicket {
  name: string;
  price: number;
  icon: ReactNode;
  color: ColorValues;
}

export const tickets: ITicket[] = [
  {
    name: 'Amarillo',
    price: 10,
    icon: Pikachu,
    color: 'yellow',
  },
  {
    name: 'Cristal',
    price: 50,
    icon: Suicune,
    color: 'crystal',
  },
  {
    name: 'Esmeralda',
    price: 150,
    icon: Rayquaza,
    color: 'emerald',
  },
];

export const trainers = [
  {
    'id': 1,
    'name': 'Brock',
  }, {
    'id': 2,
    'name': 'Gary Oak',
  }, {
    'id': 3,
    'name': 'Misty',
  }, {
    'id': 4,
    'name': 'Lt. Surge',
  }, {
    'id': 5,
    'name': 'Erika',
  }, {
    'id': 6,
    'name': 'Koga',
  }, {
    'id': 7,
    'name': 'Giovanni',
  }, {
    'id': 8,
    'name': 'Blaine',
  }, {
    'id': 9,
    'name': 'Agatha',
  }, {
    'id': 10,
    'name': 'Lance',
  }, {
    'id': 11,
    'name': 'Morty',
  }, {
    'id': 12,
    'name': 'Jasmine',
  }, {
    'id': 13,
    'name': 'Roxanne',
  }, {
    'id': 14,
    'name': 'Norman',
  }, {
    'id': 15,
    'name': 'Archie',
  }, {
    'id': 16,
    'name': 'Tabitha',
  }, {
    'id': 17,
    'name': 'Spenser',
  }, {
    'id': 18,
    'name': 'Cameron',
  }, {
    'id': 19,
    'name': 'Aria',
  }, {
    'id': 20,
    'name': 'Dion',
  }, {
    'id': 21,
    'name': 'Oswell',
  }, {
    'id': 22,
    'name': 'Theodosia',
  }, {
    'id': 23,
    'name': 'Rockie',
  }, {
    'id': 24,
    'name': 'Deidre',
  }, {
    'id': 25,
    'name': 'Lauren',
  }, {
    'id': 26,
    'name': 'Terri-jo',
  }, {
    'id': 27,
    'name': 'Audry',
  }, {
    'id': 28,
    'name': 'Gerianne',
  }, {
    'id': 29,
    'name': 'Andros',
  }, {
    'id': 30,
    'name': 'Marti',
  }, {
    'id': 31,
    'name': 'Grover',
  }, {
    'id': 32,
    'name': 'Clive',
  }, {
    'id': 33,
    'name': 'Bride',
  }, {
    'id': 34,
    'name': 'Towny',
  }, {
    'id': 35,
    'name': 'Percival',
  }, {
    'id': 36,
    'name': 'Lois',
  }, {
    'id': 37,
    'name': 'Elisa',
  }, {
    'id': 38,
    'name': 'Marsh',
  }, {
    'id': 39,
    'name': 'Andre',
  }, {
    'id': 40,
    'name': 'Orran',
  }, {
    'id': 41,
    'name': 'Ewen',
  }, {
    'id': 42,
    'name': 'Ariadne',
  }, {
    'id': 43,
    'name': 'Sephira',
  }, {
    'id': 44,
    'name': 'Tris',
  }, {
    'id': 45,
    'name': 'Berton',
  }, {
    'id': 46,
    'name': 'Dianne',
  }, {
    'id': 47,
    'name': 'Demott',
  }, {
    'id': 48,
    'name': 'Brockie',
  }, {
    'id': 49,
    'name': 'Hermina',
  }, {
    'id': 50,
    'name': 'Pansie',
  }];

export const POKEMON_TOTAL = 1025;