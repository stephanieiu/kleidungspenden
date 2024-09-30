import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './ScrollToTop';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

//import dayjs from 'dayjs';
import 'dayjs/locale/de';

// Komponenten importieren
import NavbarContainer from './components/Navbar/NavbarContainer';
import FooterContainer from './components/Footer/FooterContainer';
import RegistrierungsformularContainer from './components/Registrierungsformular/RegistrierungsformularContainer';
import LandingPageContainer from './components/LandingPage/LandingPageContainer';
import SoFunktionierts from './components/SoFunktionierts/SoFunktionierts';
import UnsereMission from './components/UnsereMission/UnsereMission';
import Datenschutz from './components/Footer/Datenschutz';
import Kontakt from './components/Footer/Kontakt';
import Impressum from './components/Footer/Impressum';

//dayjs.locale('de'); 

// Custom Theme erstellen
const theme = createTheme({
  palette: {
    primary: {
      main: '#F15B2B', // Primärfarbe (Blau)
    },
    secondary: {
      main: '#E3E3E3', // Sekundärfarbe (Rot)
    },
    typography: {
      allVariants: {
        color: '#1E1E1E', // Standard-Textfarbe für alle Textvarianten
      },
    },
  },
});


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">   {/* LocalizationProvider sorgt dafür, dass Datum- und Zeit-Komponenten korrekt lokalisiert und gerendert werden;*/}
        <div className="App">                              {/* AdapterDayjs übersetzt zwischen den Material-UI-Komponenten und der Datumsbibliothek dayjs */}
          <Router>
            <NavbarContainer  />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<LandingPageContainer />} />
              <Route path="/home" element={<LandingPageContainer />} />
              <Route path="/kleiderspende-registrieren" element={<RegistrierungsformularContainer />} />
              <Route path="/so-funktionierts" element={<SoFunktionierts />} />
              <Route path="/unsere-mission" element={<UnsereMission />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
            <FooterContainer />
          </Router>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
