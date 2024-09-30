import React from "react";

//Material-UI-Komponenten importieren
import { Box, Checkbox, FormControlLabel, FormControl, FormGroup, Typography } from '@mui/material';


function Kleidungsstuecke(props) {

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
                Welche Kleidungsstücke möchtest du spenden?
            </Typography>
            <FormControl>
                <FormGroup>
                    {props.auswaehlbareKleidungsstuecke.map((kleidungsstueck) => (
                        <FormControlLabel
                            key={kleidungsstueck}
                            control={
                                <Checkbox
                                    checked={props.kleidungsstuecke[kleidungsstueck]}
                                    onChange={props.handleChangeKleidungsstuecke}
                                    name={kleidungsstueck}
                                />
                            }
                            label={kleidungsstueck}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default Kleidungsstuecke;