import React from 'react';
import './../../App.css';


//Material-Komponenten importieren
import {Box, Container, CssBaseline, Typography} from '@mui/material';



function Impressum () {


    return (
        <Container component="impressum" maxWidth="xl">
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
                        Impressum
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

                    <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.          
                    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.          
                    </Typography>
                </Box>       
        </Container>    
    );
}

export default Impressum;