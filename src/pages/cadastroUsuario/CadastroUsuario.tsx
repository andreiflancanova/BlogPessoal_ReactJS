import React from "react";
import { Typography, Grid, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    return (
        <Grid container direction="row" justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='backgroundCadastroUsuario'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='textsCadastro'>Cadastro</Typography>
                        <TextField id='Nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='Usuário' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='Senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='Confirme a senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login'>
                                <Button type='submit' variant='contained' color='primary' className='ButtonFormatting'>
                                    Cadastrar
                                </Button>
                            </Link>    
                            <Link to='/login'>
                                <Button variant='contained' color='secondary' className='ButtonFormatting'>
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;
