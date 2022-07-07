import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import "./Navbar.css";
function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        navigate("/login")
    }

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
                            <Link to="/home">
                                <Box className="MenuPagesBox">
                                    <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/posts">
                                <Box className="MenuPagesBox">
                                    <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                        Posts
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/temas">
                                <Box className="MenuPagesBox">
                                    <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                        Subjects
                                    </Typography>
                                </Box>
                            </Link>
                           <Link to='/formularioTema'>
                                <Box className="MenuPagesBox">
                                    <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                        Add Subject
                                    </Typography>
                                </Box>
                            </Link>

                                <Box className="MenuPagesBox" onClick={goLogout}>
                                    <Typography variant="h6" color="inherit" className="MenuPagesFont">
                                        Logout
                                    </Typography>
                                </Box>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;