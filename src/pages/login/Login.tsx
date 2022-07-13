import React, {useState,useEffect,ChangeEvent} from "react";
    /*  O useState aqui é um gancho que permite adicionar uma página
        a um componente funcional, assim como manipular os valores de
        estado de um componente.*/
import { Typography, Grid, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../../services/Service';
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token,setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
    /*  userLogin é um componente
        setUserLogin é uma função que servirá para alterar esse
        componente */
        {
            /* A seguir, configuramos o valor das propriedades-padrão
            dos atributos.
            */
            id:0,
            usuario:'',
            senha: '',
            token:''
        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            /* Este método é responsável por fazer a atualização da Model */
            setUserLogin({
                ...userLogin,
                /* Os 3 pontos são chamados de Spread Operator e ele faz um
                espalhamento de todos os atributos presentes em UserLogin, os
                enviando para dentro da função setUserLogin */

                [e.target.name]: e.target.value
                /* A função updatedModel irá servir para atualizar a Model com
                os valores que o usuário digitar no campo de input. Assim, temos
                que fazer a chamada de updatedModel em cada TextField, que por sua vez
                fará a passagem dos inputs do usuário para dentro da setUserLogin.
                
                O [e.target.name] captura a propriedade
                O e.target.value captura o valor digitado no campo da propriedade.
                */

            })
        }
            useEffect(()=>{
                if(token !==''){
                    navigate('/home')
                    dispatch(addToken(token))
                }
            },[token])
            /* É responsável pelo controle do ciclo de vida de um componente  */
        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            /*  O preventDefault aqui tem função de prevenir que o botão
                atualize a tela, porque informações podem ser perdidas  */
            
            /* Para fazer o teste se está enviando os dados corretamente 
                console.log('userLogin: '+ Object.values(userLogin));*/
            try{ 
                await login(`/usuarios/logar`,userLogin,setToken)
                toast.success('Usuário logado com sucesso!',{
                    position:"top-right",
                    autoClose:2000,
                    hideProgressBar:false,
                    closeOnClick:true,
                    pauseOnHover:false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                })
            } catch(error){
                toast.error('Dados incorretos. Erro ao logar!',{
                    position:"top-right",
                    autoClose:2000,
                    hideProgressBar:false,
                    closeOnClick:true,
                    pauseOnHover:false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                })
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6}>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='textsLogin'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='Usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='Senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained' color='primary'>
                                    Login
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant='subtitle1' gutterBottom align='center' className='texts'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='backgroundLogin'>


            </Grid>
        </Grid>

    )
    
}

export default Login; 