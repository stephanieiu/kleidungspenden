import React from "react";
import dayjs from 'dayjs';

//Material-UI-Komponenten importieren
import { Box, CssBaseline, Container, Typography } from '@mui/material';


function Registrierungsbestaetigung({ datensatzRegistrierungen }) {
    const {
        abgabeort,
        datum,
        uhrzeit,
        vorname,
        nachname,
        strasse,
        hausnummer,
        plz,
        ort,
        krisengebiet,
        kleidungsstuecke,
    } = datensatzRegistrierungen[0];

    const formattedDate = dayjs(datum).format('DD.MM.YYYY');

    return (
        <>

            <Container component="registrierungsbestaetigung" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        marginBottom: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 3,
                    }}
                >
                    <Typography component="h1" variant="h4"
                        sx={{
                            textAlign: 'left',
                            width: '100%'
                        }}
                    >
                        Geschafft
                    </Typography>

                    <Box
                        sx={{
                            padding: 3,
                            gap: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            border: 1,
                            borderColor: '#D9D9D9'
                        }}
                    >
                        <Typography component="h1" variant="h5"
                            sx={{
                                textAlign: 'left',
                                width: '100%'
                            }}
                        >
                            {abgabeort === 'abholung' ? 'Die Kleidung wird durch unser Sammelfahrzeug abgeholt' : 'Du kannst die Kleidung nun bei unseren Mitarbeiter:innen abgeben'}
                        </Typography>

                        <Box
                            sx={{
                                gap: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            {abgabeort === 'abholung' && (
                                <>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <Typography component="wann" variant="h6"
                                            sx={{
                                                textAlign: 'left',
                                                width: '100%'
                                            }}
                                        >
                                            Wann
                                        </Typography>

                                        <Typography variant="body1"
                                            sx={{
                                                textAlign: 'left',
                                                width: '100%'
                                            }}
                                        >
                                            {`${formattedDate} um ${uhrzeit}`}
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <Typography component="wo" variant="h6"
                                            sx={{
                                                textAlign: 'left',
                                                width: '100%'
                                            }}
                                        >
                                            Wo
                                        </Typography>

                                        <Typography variant="body1"
                                            sx={{
                                                textAlign: 'left',
                                                width: '100%'
                                            }}
                                        >
                                            {`${vorname} ${nachname}`}

                                            < br />
                                            {`${strasse} ${hausnummer}`}
                                            < br />
                                            {`${plz} ${ort}`}
                                        </Typography>
                                    </Box>
                                </>
                            )}

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Typography component="kleidungsstuecke" variant="h6"
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%'
                                    }}
                                >
                                    Kleidungsstücke
                                </Typography>

                                <Typography variant="body1"
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%'
                                    }}
                                >
                                    {Object.keys(kleidungsstuecke).map((item, index) => (
                                        kleidungsstuecke[item] && (
                                            <React.Fragment key={index}>
                                                {item}
                                                <br />
                                            </React.Fragment>
                                        )
                                    ))}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Typography component="krisengebiet" variant="h6"
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%'
                                    }}
                                >
                                    Krisengebiet
                                </Typography>

                                <Typography variant="body1"
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%'
                                    }}
                                >
                                    {`${krisengebiet}`}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Registrierungsbestaetigung;