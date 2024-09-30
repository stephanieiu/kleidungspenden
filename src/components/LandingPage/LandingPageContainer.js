import React from "react";
import { useNavigate } from 'react-router-dom';

import LandingPage from "./LandingPage";

function LandingPageContainer() {
    const navigate = useNavigate(); // useNavigate-Hook importieren und initialisieren
    const handleClickKleiderspendeRegistrieren = () => {
        navigate('/kleiderspende-registrieren');
    }
    const handleClickSoFunktionierts = () => {
        navigate('/so-funktionierts');
    }

    return (
        < LandingPage
            handleClickKleiderspendeRegistrieren={handleClickKleiderspendeRegistrieren}
            handleClickSoFunktionierts={handleClickSoFunktionierts}
        />
    )
}

export default LandingPageContainer;