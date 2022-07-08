import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField } from "@material-ui/core"
import {Button } from '@mui/material';
import "./CadastroTema.css";
import Tema from '../../../models/Tema';
import { useNavigate,useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, post, put } from '../../../services/Service';

function CadastroTema() {
    let navigate=useNavigate();
    const {id} =useParams<{id:string}>();
    const [token,setToken]=useLocalStorage('token');
    const [tema,setTema]=useState<Tema>({
        id:0,
        descricao:''
    })
  
    // useEffect para monitorar o token
    useEffect(()=>{
        if(token == ''){
          alert("Você precisa estar logado")
          navigate("/login")
        }
      }, [token])

    // useEffect para monitorar o id
    useEffect(()=>{
        if(id !== undefined){
            findById (id)
        }
    },[id])  

    async function findById(id:string){
        buscaId(`/tema/${id}`,setTema,{
            headers: {
                'Authorization':token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            //Rota da API
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()
    }

    function back() {
        navigate('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
            <Typography variant="h3" color="textSecondary" component="h1" align="center"> Cadastro de Temas</Typography>
            <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary">
                Finalizar
            </Button>
        </form>
    </Container>
    )
}

export default CadastroTema;

