import React, { useState } from "react";

import Zeitpunkt from "./Zeitpunkt";

import dayjs from 'dayjs';
import 'dayjs/locale/de';

function ZeitpunktContainer() {
    const verfuegbareZeiten = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

    const [datum, setDatum] = useState(null);
    const [uhrzeit, setUhrzeit] = useState('');

    const handleChangeDatum = (newValue) => {
        setDatum(newValue);
    };
    const handleChangeUhrzeit = (event) => {
        setUhrzeit(event.target.value);
    };


    return (
        <Zeitpunkt 
            verfuegbareZeiten={verfuegbareZeiten}
            datum={datum}
            handleChangeDatum={handleChangeDatum}
            uhrzeit={uhrzeit}
            handleChangeUhrzeit={handleChangeUhrzeit}
        />
    )
}

export default ZeitpunktContainer;