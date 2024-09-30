import React from 'react';
import './../../App.css';

import kleiderschrank from './../../images/soFunktionierts/kleiderschrank.png'

//Material-Komponenten importieren
import { Box, Container, CssBaseline, Typography } from '@mui/material';


function SoFunktionierts() {
    return (
        <Container component="soFunktionierts" maxWidth="xl"
            sx={{
                gap: 6,
            }}>

            <CssBaseline />
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    paddingTop: 8,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },  // Responsives Layout
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
                            width: { xs: '100%', lg: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: 1,
                        }}
                    >
                        <Typography component="h1" variant="h4" sx={{ textAlign: 'left' }}>
                            So funktionierts
                        </Typography>
                    </Box>

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
                            1
                        </Typography>

                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                        </Typography>
                    </Box>

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
                            2
                        </Typography>

                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                        </Typography>
                    </Box>

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
                            3
                        </Typography>

                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                        </Typography>
                    </Box>

                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', lg: '50%' },
                        mt: { xs: 2, md: 0 }, // Abstand oben bei xs, kein Abstand bei md 
                    }}
                >
                    <img
                        src={kleiderschrank}
                        alt="Kleiderschrank"
                        style={{ width: '100%' }}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default SoFunktionierts;