import React from "react";

//Material-UI-Komponenten importieren
import { Box, RadioGroup, FormControlLabel, FormControl, Radio, Typography } from '@mui/material';


function Krisengebiet(props) {

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
                Für welches Krisengebiet möchtest du spenden?
            </Typography>

            <Box component='date'
                sx={{ mt: 2, }}
                display="flex"
                flexDirection="column"
                gap={2}
            >
                <FormControl>
                    <RadioGroup
                        name="krisengebiet"
                        defaultValue="krisengebiet01"
                        value={props.krisengebiet}
                        onChange={props.handleChangeKrisengebiet}
                    >
                        {props.krisengebieteSortiert
                            .map((gebiet, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={gebiet}
                                    control={<Radio />}
                                    label={gebiet}
                                />
                            ))}
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    );
}

export default Krisengebiet;