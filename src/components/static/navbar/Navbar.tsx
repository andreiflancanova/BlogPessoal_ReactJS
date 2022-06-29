import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" className="Menu">
                    <Grid container justifyContent="space-between">
                        <Box style={{ cursor: "pointer" }} >
                            <Typography variant="h3" color="inherit" className="BlogTitle">
                                ANDREI'S SPOT
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="space-around">
                            <Box className="MenuPagesBox">
                                <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                    Home
                                </Typography>
                            </Box>
                            <Box className="MenuPagesBox">
                                <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                    Posts
                                </Typography>
                            </Box>
                            <Box className="MenuPagesBox">
                                <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                    Subjects
                                </Typography>
                            </Box>
                            <Box className="MenuPagesBox">
                                <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                    Add Subject
                                </Typography>
                            </Box>
                            <Link to='/login' className='text-decorator-none'>
                                <Box className="MenuPagesBox">
                                    <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                        Logout
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;