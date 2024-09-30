import React from "react";
import { useNavigate } from 'react-router-dom';

import Navbar from "./Navbar";
const pages = ['Home', 'So funktionierts', 'Kleiderspende registrieren', 'Unsere Mission'];

function NavbarContainer() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);  //Ein State, der den aktuellen Zustand des Navigationsmenüs steuert (offen oder geschlossen). Wenn das Menü geöffnet wird, wird das Event-Target gespeichert, um das Menü zu rendern, und bei Schließen auf null gesetzt.
    const navigate = useNavigate(); // useNavigate-Hook importieren und initialisieren

    //wird aufgerufen, wenn der Benutzer das Navigationsmenü öffnen möchte (z.B. bei einem Klick auf das Hamburger-Menü-Symbol auf mobilen Geräten).
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);  //event.currentTarget enthält das DOM-Element, das das Ereignis ausgelöst hat 
    };

    //wird aufgerufen, um das Navigationsmenü zu schließen.
    //setzt den Wert von anchorElNav wieder auf null, was signalisiert, dass kein Element mehr ausgewählt ist, und das Menü wird daraufhin geschlossen.
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    //Navigiert zur Home-Seite bei Klick auf das Logo
    const handleClickLogo = () => {
        navigate('/');
    };

    //Navigiert zur Seite Kleiderspende registrieren
    const handleClickKleiderspendeRegistrieren = () => {
        navigate('/kleiderspende-registrieren');
    };

    //Navigiert zur Seite So funkitonierts
    const handleClickSoFunktionierts = () => {
        navigate('/so-funktionierts');
    };

    //Navigiert zur Seite Unsere Mission
    const handleClickUnsereMission = () => {
        navigate('/unsere-mission');
    };

    return (
        <Navbar
            pages={pages}
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            handleClickKleiderspendeRegistrieren={handleClickKleiderspendeRegistrieren}
            handleClickLogo={handleClickLogo}
            handleClickSoFunktionierts={handleClickSoFunktionierts}
            handleClickUnsereMission={handleClickUnsereMission}
        />
    )
}

export default NavbarContainer;