import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import Container from 'common/Container';

import {
  Hero,
  Details,
  Counter,
  Gallery,
  Crumbs,
  SummaryVideo,
  Rules,
  MapImage,
} from './components';

const PortfolioSmartCity = () => {
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
          <SummaryVideo />
        </Container>
      </Box>
      <Box>
        <Container>
          <Details />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <MapImage />
        </Container>
      </Box>
      <Box>
        <Container>
          <Rules />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <Gallery />
        </Container>
      </Box>
    </Box>
  );
};

export default PortfolioSmartCity;
