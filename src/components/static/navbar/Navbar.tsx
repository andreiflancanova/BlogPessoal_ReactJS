import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "./Navbar.css";
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado',{
            position:"top-right",
            autoClose:2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate("/login")
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent =
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
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;