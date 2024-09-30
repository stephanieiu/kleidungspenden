import React from 'react';
import { Box, CssBaseline, Container, Grid, Typography } from '@mui/material';
import { PrimaryButton } from '../GlobalComponents/Button/Button';

const RegistrierungsformularLayout = ({  children, ...props } ) => {

    return (
        <Container component="registrierungsformular" maxWidth="xl">
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
                    Kleiderspende registrieren
                </Typography>

                <Box
                    sx={{
                        padding: 4,
                        gap: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        border: 1,
                        borderColor: '#D9D9D9'
                    }}
                >
                    {children}

                    <Grid container justifyContent="flex-end" spacing={2}>
                        <Grid item>     
                            <PrimaryButton
                                label='Registrierung abschließen'
                                onClick={props.handleSubmit}
                                disabled={props.registrierungUnvollstaendig}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default RegistrierungsformularLayout;