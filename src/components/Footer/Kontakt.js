import React from 'react';
import './../../App.css';


//Material-Komponenten importieren
import {Box, Container, CssBaseline, Typography} from '@mui/material';



function Kontakt () {


    return (
        <Container component="kontakt" maxWidth="xl">
            <CssBaseline />
                <Box
                    sx={{
                    width: "100%",
                    minHeight: '80vh',
                    paddingTop: 8, 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'top',
                    gap: 3,
                    }}
                >
                    
                    
                    <Typography component="h1" variant="h4" sx={{ textAlign: 'left' }}>
                    Kontakt
                    </Typography>


                    <Box
                    sx={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                    >
                        <Typography variant="h5" sx={{ textAlign: 'left' }}>
                        Kleidung. Spenden e.V. 
                        </Typography>

                    <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    Straße Hausnummer < br />
                    Postleizahl Ort < br />
                    E-Mail-Adresse < br />
                    Telefonnummer < br />
                    </Typography>
                    </Box>
                    
                </Box>       
        </Container>    
    );
}

export default Kontakt;