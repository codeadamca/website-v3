import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import Container from 'common/Container';

import {
  Hero,
  Crumbs,
  Details,
  Counter,
  Gallery,
  HumberGallery,
  HumberDetails,
} from './components';

const PortfolioLogos = () => {
  const theme = useTheme();
  return (
    <Box>
      <Hero />
      <Crumbs />
      <Box>
        <Container>
          <Counter />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <Gallery />
        </Container>
      </Box>
      <Box>
        <Container>
          <Details />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <HumberGallery />
        </Container>
      </Box>
      <Box>
        <Container>
          <HumberDetails />
        </Container>
      </Box>
    </Box>
  );
};

export default PortfolioLogos;
