interface UserLogin{
    // Crio os mesmos atributos que já estão inseridos no Back-End
    id: number;
    usuario:string;
    senha:string;
    token?:string | null
}

export default UserLogin;