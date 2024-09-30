import React, { useState, useEffect } from "react";


import RegistrierungsformularLayout from "./RegistrierungsformularLayout.js";
import Kleidungsstuecke from "./Kleidungsstuecke.js";
import Krisengebiet from "./Krisengebiet";
import Abholung from "./Abholung";
import Abgabeort from "./Abgabeort";
import Zeitpunkt from "./Zeitpunkt";
import Registrierungsbestaetigung from "./Registrierungsbestaetigung.js";

import dayjs from 'dayjs';
import 'dayjs/locale/de';

function RegistrierungsformularContainer() {

    // Sichtbarkeit der Komponente Registrierungsformular
    const [RegistrierungsformularVisible, setRegistrierungsformularVisible] = useState(true);

    // Sichtbarkeit der Komponente Registrierungsbestätigung steuern
    const [registrierungsbestaetigungVisible, setRegistrierungsbestaetigungVisible] = useState(false);

    // Datensatz für alle Registrierungen
    const [datensatzRegistrierungen, setDatensatzRegistrierungen] = useState([]);


    // Kleidungsstücke
    const auswaehlbareKleidungsstuecke = [
        "Pullover",
        "Hose(n) (lang)",
        "Hose(n) (kurz)",
        "T-Shirt(s)",
        "Top(s)",
        "Schuhe",
        "Jacke(n) (dick)",
        "Jacke(n) (dünn)",
        "Socken"
    ];

    // Alle Zustände für die ausgewählten Kleidungsstücke werden zunächst auf false gesetzt
    const [kleidungsstuecke, setKleidungsstuecke] = useState(
        auswaehlbareKleidungsstuecke.reduce((acc, kleidungsstueck) => {
            acc[kleidungsstueck] = false;
            return acc;
        }, {})
    );

    const handleChangeKleidungsstuecke = (event) => {
        setKleidungsstuecke({
            ...kleidungsstuecke,
            [event.target.name]: event.target.checked,
        },
        );
    };

    // Krisengebiete
    const krisengebiete = [
        "Krisengebiet01",
        "Krisengebiet04",
        "Krisengebiet03",
        "Krisengebiet02",
        "Krisengebiet05",
        "Krisengebiet06"
    ];

    const [krisengebiet, setKrisengebiet] = useState('');
    const handleChangeKrisengebiet = (event) => {
        setKrisengebiet(event.target.value);
    };

    // Sortieren der angezeigten Optionen
    const krisengebieteSortiert = krisengebiete.sort((a, b) => a.localeCompare(b));


    // Abgabeort
    const [abgabeort, setAbgabeort] = useState('');
    const handleChangeAbgabeort = (event) => {
        setAbgabeort(event.target.value);
    };


    // Abholung-Adresse
    // Anrede
    const [anrede, setAnrede] = useState('');

    const handleChangeAnrede = (event) => {
        setAnrede(event.target.value);
    };


    // Vorname
    const [vorname, setVorname] = useState('');

    const handleChangeVorname = (event) => {
        setVorname(event.target.value);
    };

    // Nachname
    const [nachname, setNachname] = useState('');

    const handleChangeNachname = (event) => {
        setNachname(event.target.value);
    };

    // Strasse
    const [strasse, setStrasse] = useState('');

    const handleChangeStrasse = (event) => {
        setStrasse(event.target.value);
    };

    // Hausnummer
    const [hausnummer, setHausnummer] = useState('');

    const handleChangeHausnummer = (event) => {
        setHausnummer(event.target.value);
    };

    // PLZ
    const [plz, setPlz] = useState('');
    const [errorPlz, setErrorPlz] = useState(false);

    const handleChangePlz = (event) => {
        const value = event.target.value;

        // Eingabe erlaubt ausschließlich Ziffern
        if (/^\d*$/.test(value)) {
            setPlz(value);

            // Überprüfen, ob PLZ mit 66 beginnt
            // Wenn PLZ nicht mit 66 beginnt - Fehlermeldung
            // Fehlermeldung nach Eingabe der zweiten Ziffer
            if (value.startsWith('66') || value.length < 2) {
                setErrorPlz(false);
            } else {
                setErrorPlz(true);
            }
        }
    };

    // Ort
    const [ort, setOrt] = useState('');

    const handleChangeOrt = (event) => {
        setOrt(event.target.value);
    };

    // Abholung Zeitpunkt
    const verfuegbareZeiten = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

    const [datum, setDatum] = useState(null);
    const [uhrzeit, setUhrzeit] = useState('');
    const [uhrzeitDisabled, setUhrzeitDisabled] = useState(true);
    const tomorrow = dayjs().add(1, 'day');


    const handleChangeDatum = (newValue) => {
        setDatum(newValue);
        if (newValue) {
            setUhrzeitDisabled(false); // Nach erfolgter Auswahl eines Datums wird das Uhrzeitenauswahlfeld aktiviert
        } else {
            setUhrzeitDisabled(true);
        }

    };
    const handleChangeUhrzeit = (event) => {
        setUhrzeit(event.target.value);
    };

    const abgabeortAbholung =
        abgabeort === 'abholung' && (
            <>
                <Zeitpunkt
                    verfuegbareZeiten={verfuegbareZeiten}
                    datum={datum}
                    tomorrow={tomorrow}
                    handleChangeDatum={handleChangeDatum}
                    uhrzeit={uhrzeit}
                    uhrzeitDisabled={uhrzeitDisabled}
                    handleChangeUhrzeit={handleChangeUhrzeit}
                />

                <Abholung
                    anrede={anrede}
                    vorname={vorname}
                    nachname={nachname}
                    strasse={strasse}
                    hausnummer={hausnummer}
                    plz={plz}
                    errorPlz={errorPlz}
                    ort={ort}
                    handleChangeAnrede={handleChangeAnrede}
                    handleChangeVorname={handleChangeVorname}
                    handleChangeNachname={handleChangeNachname}
                    handleChangeStrasse={handleChangeStrasse}
                    handleChangeHausnummer={handleChangeHausnummer}
                    handleChangePlz={handleChangePlz}
                    handleChangeOrt={handleChangeOrt}
                />
            </>
        );


    // Registrierung abschließen

    // Zustand zum Einblenden des Abschließen-Button
    const [registrierungUnvollstaendig, setRegistrierungUnvollstaendig] = useState(true);

    // Abschließen-Button disabled, solange nicht alle Pflichtfelder ausgefüllt wurden
    useEffect(() => {
        // Überprüfe, ob alle Pflichtfelder ausgefüllt sind
        const minEinKleidungsstueckeAusgewaehlt = Object.values(kleidungsstuecke).some(value => value);
        const allePflichtfelderAusgefuellt =
            minEinKleidungsstueckeAusgewaehlt &&
            krisengebiet &&
            abgabeort &&
            (abgabeort !== 'abholung' || (vorname && nachname && strasse && hausnummer && plz.startsWith('66') && plz.length === 5 && ort && datum && uhrzeit));

        setRegistrierungUnvollstaendig(!allePflichtfelderAusgefuellt);
    }, [
        kleidungsstuecke,
        krisengebiet,
        abgabeort,
        vorname,
        nachname,
        strasse,
        hausnummer,
        plz,
        ort,
        datum,
        uhrzeit,
        errorPlz
    ]);

    const handleSubmit = () => {
        // Wenn alle Pflichtfelder inkl. PLZ richtig ausgefüllt sind:
        // Objekt mit den Daten der neuen Registrierung erstellen
        const neueRegistrierung = {
            anmeldung: new Date().toString(),  // Zeitstempel hinzufügen
            anrede: anrede,
            vorname: vorname,
            nachname: nachname,
            strasse: strasse,
            hausnummer: hausnummer,
            plz: plz,
            ort: ort,
            kleidungsstuecke: kleidungsstuecke,
            krisengebiet: krisengebiet,
            abgabeort: abgabeort,
            datum: datum,
            uhrzeit: uhrzeit,
        };

        // Funktion zur Aktualisierung des Datensatzes
        setDatensatzRegistrierungen((prev) =>
            [neueRegistrierung, ...prev]);

        // Komponente RegistrierungsformularContainer ausblenden
        setRegistrierungsformularVisible(false);
        setRegistrierungsbestaetigungVisible(true);

    };

    return (
        <>
            {RegistrierungsformularVisible && (
                <RegistrierungsformularLayout handleSubmit={handleSubmit} registrierungUnvollstaendig={registrierungUnvollstaendig}>
                    <Kleidungsstuecke
                        auswaehlbareKleidungsstuecke={auswaehlbareKleidungsstuecke}
                        kleidungsstuecke={kleidungsstuecke}
                        handleChangeKleidungsstuecke={handleChangeKleidungsstuecke}
                    />
                    <Krisengebiet
                        krisengebiet={krisengebiet}
                        handleChangeKrisengebiet={handleChangeKrisengebiet}
                        krisengebieteSortiert={krisengebieteSortiert}
                    />
                    <Abgabeort
                        abgabeort={abgabeort}
                        handleChangeAbgabeort={handleChangeAbgabeort}
                    />
                    {abgabeortAbholung}
                </RegistrierungsformularLayout>
            )}

            {registrierungsbestaetigungVisible && (
                <Registrierungsbestaetigung
                    datensatzRegistrierungen={datensatzRegistrierungen} />
            )}

        </>

    );
}
export default RegistrierungsformularContainer;