import { useEffect, useState } from 'react';
import { PageWrapper, PokemonCard } from '../../molecules';
import { Container, Typography } from '../../atoms';
import { useAppSelector } from '../../../hooks/useStoreActions';
import { ITrainers } from '../../../store/region';
import { capitalize } from '../../../util/functions';

export const SectionChampions = () => {
  const name = useAppSelector(state => state.region.selected);
  const region = useAppSelector(state => state.region.regions[name]);

  const [selectedTrainer, setSelectedTrainer] = useState<ITrainers>();

  useEffect(() => {
    setSelectedTrainer(undefined);
  }, [name]);

  if (!name) {
    return null;
  }

  return (
    <PageWrapper>
      <Container width="100%" mt={32} mb={64}>
        <Typography
          as="h3"
          fontSize={32}
          fontWeight={600}
          color="white"
          mb={48}
        >
          Region {capitalize(name)}
        </Typography>

        <Container
          width="100%"
          direction="column"
          gap={32}
          sm={{
            direction: "row",
          }}
        >
          <Container
            width="100%"
            gap={16}
            sm={{
              width: 200,
            }}
          >
            {region.trainers.map((trainer) => (
              <Container
                key={trainer.id}
                width="100%"
                padding={16}
                borderRadius={16}
                bgColor={selectedTrainer?.id === trainer.id ? 'secondary' : 'white'}
                justify="center"
                alignItems="center"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setSelectedTrainer(trainer)}
              >
                <Typography
                  color={selectedTrainer?.id === trainer.id ? 'white' : 'secondary'}
                >
                  {trainer.name}
                </Typography>
              </Container>
            ))}
          </Container>

          <Container width="100%">
            {selectedTrainer && (
              <>
                <Typography
                  fontSize={24}
                  color="white"
                  mb={32}
                >
                  Equipo Pókemon
                </Typography>

                <Container
                  direction="row"
                  gap={16}
                  style={{
                    flexWrap: "wrap",
                  }}
                >
                  {selectedTrainer.pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon} id={pokemon} />
                  ))}
                </Container>
              </>
            )}
          </Container>
        </Container>
      </Container>
    </PageWrapper>
  );
}