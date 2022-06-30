import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography,Grid} from '@material-ui/core';
import { Box } from '@mui/material';
import "./Footer.css";

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" className='textFormatting'>Follow us!</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noreferrer">
                                <FacebookIcon className='social' />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noreferrer">
                                <InstagramIcon className='social' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='social' />
                            </a>
                        </Box>
                        <Box display="flex"  justifyContent="center">
                            <img src="https://i.imgur.com/oGKvCzi.png" alt="Logo Generation" height="40px"/>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" >
                        <Box>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textFormatting'>© 2022 Copyright:</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;