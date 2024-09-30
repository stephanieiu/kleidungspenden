import React from 'react';
import './../../App.css';

//Material-Komponenten importieren
import { Box, Button, Container, CssBaseline, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PrimaryButton } from '../GlobalComponents/Button/Button';

import imageLandingPage from './../../images/landingPage/imageLandingPage.png'
import schriftzugMobil from './../../images/landingPage/schriftzugMobil.svg'
import schriftzugTablet from './../../images/landingPage/schriftzugTablet.svg'
import schriftzugPc from './../../images/landingPage/schriftzugPc.svg'


function LandingPage(props) {

  const theme = useTheme();

  // Media Queries für unterschiedliche Bildschirmgrößen
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  // Auswahl des entsprechenden Schriftzuges basierend auf der Bildschirmgröße
  let schriftzug;
  if (isXs) {
    schriftzug = schriftzugMobil;
  } else if (isLg) {
    schriftzug = schriftzugTablet;
  } else if (isXl) {
    schriftzug = schriftzugPc;
  } else {
    // Default für andere Bildschirmgrößen
    schriftzug = schriftzugTablet;
  }

  return (
    <Container component="registrierungsformular" maxWidth="xl">
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '90vh',
          backgroundImage: `url(${imageLandingPage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Halbtransparenter Layer */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Heller Layer
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          {/* Responsiver Schriftzug */}
          <img src={schriftzug} alt="Schriftzug Kleidung spenden" style={{ maxWidth: '100%', height: 'auto' }} />
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
            }}
          >
            <PrimaryButton label="Kleiderspende registrieren" onClick={props.handleClickKleiderspendeRegistrieren} />
            <Button
              label=""
              onClick={props.handleClickSoFunktionierts}
              sx={{
                backgroundColor: '#fff',
                color: 'primary',

              }}
            >
              So funktionierts
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}


export default LandingPage;