import React from "react";

//Material-UI-Komponenten importieren
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function Zeitpunkt(props) {

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
                Wann soll die Kleidung abgeholt werden?
            </Typography>

            <Box component='date'
                sx={{ mt: 2, }}
                display="flex"
                flexDirection="column"
                gap={2}
            >

                <FormControl fullWidth >
                    <DatePicker   // Rendert den DatePicker als Desktop Komponente oder mobile Komponente, in Abhängigkeit des Gerätes, auf dem die Anwendung ausgeführt wird
                        label="Datum"
                        value={props.datum}
                        onChange={props.handleChangeDatum}
                        disablePast                             // verhindert das Auswählen von Daten in der Vergangenheit
                        minDate={props.tomorrow}                // frühestmögliches Auswahldatum: morgen
                    />
                </ FormControl >


                <FormControl fullWidth disabled={props.uhrzeitDisabled} >
                    <InputLabel id="uhrzeit">Uhrzeit</InputLabel>
                    <Select
                        sx={{ textAlign: 'left' }}
                        labelId="uhrzeit"
                        id="uhrzeit"
                        value={props.uhrzeit}
                        label="Uhrzeit"
                        onChange={props.handleChangeUhrzeit}
                    >

                        {props.verfuegbareZeiten.map((zeit) => (
                            <MenuItem key={zeit} value={zeit}>
                                {zeit}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
}

export default Zeitpunkt;