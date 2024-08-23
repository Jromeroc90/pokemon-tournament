import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { Container, Typography } from '../../atoms';
import { PageWrapper } from '../../molecules';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreActions.ts';
import { selectRegion } from '../../../store/region';
import { getRegions } from '../../../util/request.ts';
import { RegionDTO } from '../../../util/types.ts';
import { capitalize } from '../../../util/functions.ts';

const RegionGrid = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SectionRegions = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(state => state.region.selected);

  const { data: regions } = useQuery({
    queryKey: ['regions'],
    queryFn: () => getRegions()
      .then(({ data: response }) => response.results),
    placeholderData: [],
  })

  const handleSelectRegion = (name: string) => {
    dispatch(selectRegion(name));
  }

  return (
    <PageWrapper>
      <Container width="100%" mt={64} mb={32}>
        <Typography
          as="h2"
          width="100%"
          fontSize={36}
          fontWeight={600}
          textAlign="center"
          mb={24}
          color="white"
        >
          Todas las regiones
        </Typography>

        <Typography
          width="100%"
          fontSize={24}
          mb={64}
          textAlign="center"
          color="white"
        >
          Selecciona una región para ver sus campeones
        </Typography>

        <RegionGrid>
          {regions.map((region: RegionDTO) => (
            <Container
              key={region.name}
              width="100%"
              borderColor={selected === region.name ? 'primary' : 'white'}
              borderRadius={8}
              borderWidth={3}
              padding={16}
              bgColor="white"
              style={{
                cursor: 'pointer',
              }}
              sm={{
                width: 250,
              }}
              onClick={() => handleSelectRegion(region.name)}
            >
              <Typography
                width="100%"
                fontSize={24}
                textAlign="center"
              >
                {capitalize(region.name)}
              </Typography>
            </Container>
          ))}
        </RegionGrid>
      </Container>
    </PageWrapper>
  );
};