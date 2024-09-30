import React from "react";

//Material-UI-Komponenten importieren
import { Box, RadioGroup, FormControlLabel, FormControl, Radio, Typography } from '@mui/material';


function Abgabeort(props) {


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            <Typography component="h1" variant="h5"
                sx={{
                    textAlign: 'left',
                    width: '100%'
                }}
            >
                Möchtest du die Kleidung in der Sammelstelle abgeben oder sollen wir sie abholen?
            </Typography>
            <Box component='date'
                sx={{ mt: 2, }}
                display="flex"
                flexDirection="column"
                gap={2}
            >
                <FormControl>
                    <RadioGroup
                        name="abgabeort"
                        defaultValue="abgabe"
                        value={props.abgabeort}
                        onChange={props.handleChangeAbgabeort}
                    >
                        <FormControlLabel value="abgabe" control={<Radio />} label="Abgabe an Sammelstelle" />
                        <FormControlLabel value="abholung" control={<Radio />} label={
                            <>
                                Abholung von zuhause <br />
                                (nur innerhalb des Postleitzahlengebietes 66xxx möglich)
                            </>
                        }
                            sx={{
                                alignItems: 'flex-start', // Label linksbündig ausrichten
                                '& .MuiFormControlLabel-label': {
                                    textAlign: 'left', // Text im Label linksbündig
                                },
                            }}
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    );
}

export default Abgabeort;