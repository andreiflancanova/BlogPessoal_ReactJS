import React,{useState,useEffect, ChangeEvent} from "react";
import { Typography, Grid, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroNovoUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    /* Este useState serve para gravar os dados cadastrados */
        const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senha){
        cadastroNovoUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuário cadastrado com sucesso!')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container direction="row" justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='backgroundCadastroUsuario'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='textsCadastro'>Cadastro</Typography>
                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='Nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='Usuário' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='Senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirme a senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary' className='ButtonFormatting'>
                                    Cadastrar
                                </Button>
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
