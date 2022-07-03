import axios from 'axios';
//Requisições serão interceptadas pelo Axios

export const api = axios.create({
    /*  Aqui estamos criando um objeto que está recebendo o Axios e todas as funcionalidades
        que ele possui*/
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const cadastroNovoUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

