import React from "react";


//Material-UI-Komponenten importieren
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';


function Abholung(props) {

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
                Wo soll die Kleidung abgeholt werden?
            </Typography>
            <Box component='form'
                sx={{ mt: 2, }}
                noValidate              // Deaktiviert die standardmäßige HTML5-Formularvalidierung
                autoComplete="off"      // Deaktiviert die automatische Vervollständigung der Formulardaten durch den Browser
                display="flex"
                flexDirection="column"
                gap={2}
            >
                <Grid container spacing={2}>
                    <Grid item component='anrede'
                        xs={2}
                        sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="anredeLabel">Anrede</InputLabel>
                            <Select
                                sx={{ textAlign: 'left' }}
                                labelId="anrede"
                                id="anrede"
                                value={props.anrede}
                                label="Anrede"
                                onChange={props.handleChangeAnrede}

                            >
                                <MenuItem value='Frau'>Frau</MenuItem>
                                <MenuItem value='Herr'>Herr</MenuItem>
                                <MenuItem value='/'>/</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid container item spacing={2} >
                        <Grid item component='vorname'
                            xs={12} sm={6}>
                            <TextField
                                id="vorname"
                                name="vorname"
                                required
                                fullWidth
                                label="Vorname"
                                placeholder="Frank N."
                                value={props.vorname}
                                onChange={props.handleChangeVorname}
                            />
                        </Grid>

                        <Grid item component='nachname'
                            xs={12} sm={6}>
                            <TextField
                                id="nachname"
                                name="nachname"
                                required
                                fullWidth
                                label="Nachname"
                                placeholder="Stein"
                                value={props.nachname}
                                onChange={props.handleChangeNachname}
                            />
                        </Grid>
                    </Grid>

                    <Grid item component='strasse'
                        xs={8} sm={8}>
                        <TextField
                            id="strasse"
                            name="strasse"
                            required
                            fullWidth
                            label="Straße"
                            placeholder="Schlossstraße"
                            value={props.strasse}
                            onChange={props.handleChangeStrasse}
                        />
                    </Grid>

                    <Grid item component='hausnummer'
                        xs={4} sm={4}>
                        <TextField              // Es werden sowohl Ziffern als auch Buchstaben zugelassen (z. B. Hausnummer 2b)
                            id="hausnummer"
                            name="hausnummer"
                            required
                            fullWidth
                            label="Nr."
                            placeholder="1"
                            value={props.hausnummer}
                            onChange={props.handleChangeHausnummer}
                        />
                    </Grid>

                    <Grid item xs={4} sm={4}>
                        <TextField
                            id="plz"
                            name="plz"
                            required
                            fullWidth
                            inputProps={{ maxLength: 5 }}
                            label="PLZ"
                            placeholder="66xxx"
                            value={props.plz}
                            onChange={props.handleChangePlz}
                            error={props.errorPlz}
                            helperText={props.errorPlz && 'Zulässige Postleitzahlen: 66xxx'}
                        />
                    </Grid>

                    <Grid item xs={8} sm={8}>
                        <TextField
                            id="ort"
                            name="ort"
                            required
                            fullWidth
                            label="Ort"
                            placeholder="Monsterstadt"
                            value={props.ort}
                            onChange={props.handleChangeOrt}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Abholung;

