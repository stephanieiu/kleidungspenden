import React from 'react';
import './../../App.css';

//Material-Komponenten importieren
import { Box, Container, CssBaseline, Typography } from '@mui/material';

import givePc from './../../images/unsereMission/givePc.svg'
import presentPc from './../../images/unsereMission/presentPc.svg'


function UnsereMission() {

    return (
        <Container component="unsereMission" maxWidth="xl"
            sx={{
                gap: 6,
            }}>
            <CssBaseline />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '90vh',
                    backgroundImage: `url(${givePc})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    display: { xs: 'none', lg: 'flex' }
                }}
            />
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    paddingTop: 8,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },  // Responsives Layout
                    justifyContent: 'flex-start',
                    alignItems: 'top',
                    gap: 6,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 3,
                    }}
                >
                    <Box
                        sx={{
                            alignSelf: 'stretch',
                            width: { xs: '100%', lg: '60%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: 1,
                        }}
                    >
                        <Typography component="h1" variant="h4" sx={{ textAlign: 'left' }}>
                            Unsere Mission
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', lg: '40%' },
                        mt: { xs: 2, md: 0 }, // Abstand oben bei xs, kein Abstand bei md 
                    }}
                >
                    <img
                        src={presentPc}
                        alt="Geschenk"
                        style={{ width: '100%' }}
                    />
                </Box>
            </Box>
        </Container>
    );
}


export default UnsereMission;