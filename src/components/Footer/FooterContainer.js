import React from "react";
import { useNavigate } from 'react-router-dom';

import Footer from "./Footer";

function FooterContainer() {

    const navigate = useNavigate(); // useNavigate-Hook importieren und initialisieren
  
    const handleClickDatenschutz = () => {
      navigate('/datenschutz');
    };

    const handleClickImpressum = () => {
        navigate('/impressum');
      };

      const handleClickKontakt= () => {
        navigate('/kontakt');
      };
    return (
        <Footer 
        handleClickDatenschutz= {handleClickDatenschutz}
        handleClickImpressum= {handleClickImpressum}
        handleClickKontakt= {handleClickKontakt}
        />
    )
}

export default FooterContainer;