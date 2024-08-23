import { useQuery } from '@tanstack/react-query';
import { Container, Image, Typography } from '../../atoms';
import { getPokemon } from '../../../util/request.ts';
import { capitalize } from '../../../util/functions.ts';
import { PokemonCardProps } from './interfaces.ts';

export const PokemonCard = ({
  id,
}: PokemonCardProps) => {
  const { data: pokemon } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(id)
      .then(({ data: response }) => response),
  })

  return (
    <Container
      width="100%"
      height={200}
      bgColor="white"
      borderRadius={16}
      padding={16}
      alignItems="center"
      justify="center"
      sm={{
        width: 200,
      }}
    >
      {pokemon ? (
        <>
          <Image src={pokemon.sprites.front_default} width={100} />
          <Typography
            as="span"
            mt={16}
            fontSize={18}
          >
            {capitalize(pokemon.name)}
          </Typography>
        </>
      ) : (
        <Typography fontSize={14}>
          Loading...
        </Typography>
      )}

    </Container>
  );
};