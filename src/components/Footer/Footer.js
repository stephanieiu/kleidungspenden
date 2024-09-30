import React from "react";
import { Box, CssBaseline, Grid, Typography } from "@mui/material";





function Footer (props){

  return (
    
<>
<CssBaseline />

<Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#F3F3F3",
        paddingTop: 2,
        paddingBottom: 2,
        mt: 2,
      }}
    >
     

        
        <Grid container direction="row" alignItems="center"
            sx={{
                gap: 2,
                justifyContent: 'center',
              alignItems: 'center',
              }}>

            <Grid item>
                <Typography
                variant="subtitle1"
                onClick={props.handleClickDatenschutz}  // onClick Event
                sx={{ textDecoration: 'none', color: 'text.primary', cursor: 'pointer' }} // Zeiger für Klickbarkeit
                >
                Datenschutz
                </Typography>
          </Grid>

          <Grid item >
            <Typography variant="subtitle1"
            onClick={props.handleClickImpressum}  // onClick Event
            sx={{ textDecoration: 'none', color: 'text.primary', cursor: 'pointer' }} // Zeiger für Klickbarkeit
            >
              Impressum
            </Typography>
          </Grid>

          <Grid item >
            <Typography variant="subtitle1"
            onClick={props.handleClickKontakt}  // onClick Event
            sx={{ textDecoration: 'none', color: 'text.primary', cursor: 'pointer' }} // Zeiger für Klickbarkeit
            >
              Kontakt
            </Typography>
          </Grid>

          <Grid item>
            <Typography  variant="subtitle1">
              {`Copyright ${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>

    </Box>
    </>

  );
};

export default Footer;