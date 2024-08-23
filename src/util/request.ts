import axios from './axios.ts';

export const getRegions = () => axios.get('/region');

export const getPokemon = (id: number) => axios.get(`/pokemon/${id}`);