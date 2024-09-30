import React from 'react';
import './../../App.css';

import Logo_klein from './../../images/navbar/Logo_klein.svg';
import Logo_mittel from './../../images/navbar/Logo_mittel.svg';

import { PrimaryButton } from '../GlobalComponents/Button/Button';


//Material-Komponenten importieren
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar({ pages, ...props }) {
    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: 'white' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, mr: 1 }} >
                        <img
                            src={Logo_mittel}
                            alt={'Logo Kleidung spenden'}
                            onClick={props.handleClickLogo}
                            style={{ cursor: 'pointer' }} // Zeiger ändern, um anklickbar zu sein 
                        />
                    </Box>

                    <Box sx={{ display: { xs: 'flex', lg: 'none' }, mr: 1 }} >
                        <img
                            src={Logo_klein} alt={'Logo Kleidung spenden'}
                            onClick={props.handleClickLogo}
                            style={{ cursor: 'pointer' }} // Zeiger ändern, um anklickbar zu sein 
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={props.handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Typography
                                    component={Link}
                                    to={`/${page.replace(/\s+/g, '-').toLowerCase()}`}
                                    sx={{ textDecoration: 'none', color: 'text.primary' }}
                                >
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            onClick={props.handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="navbar"
                            anchorEl={props.anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(props.anchorElNav)}
                            onClose={props.handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={props.handleCloseNavMenu}>
                                    <Typography
                                        component={Link}
                                        to={`/${page.replace(/\s+/g, '-').toLowerCase()}`}
                                        sx={{ textDecoration: 'none', color: 'text.primary' }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>
                        <PrimaryButton label='Kleiderspende registrieren' onClick={props.handleClickKleiderspendeRegistrieren} />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;