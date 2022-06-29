import React from "react";
import { Typography, Grid, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField id='Usuário' label='Usuário' variant='outlined' name='User' margin='normal' fullWidth />
                        <TextField id='Senha' label='Senha' variant='outlined' name='Password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Login
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage:`url(https://foyr.com/learn/wp-content/uploads/2021/08/modern-office-design.png)`,
                backgroundRepeat:'no-repeat',width:'100vh',minHeight:'100vh',backgroundSize:'cover',backgroundPosition:'center'
            }}>


            </Grid>
        </Grid>

    )
}

export default Login; 