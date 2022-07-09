import React, { useEffect } from "react";
import{Grid,Button,Typography} from "@material-ui/core"
import { Box } from "@mui/material"

import "./Home.css";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
function Home() {

    let navigate=useNavigate();
    const token= useSelector<TokenState,TokenState["tokens"]>(
        (state) => state.tokens
    );
    useEffect(()=>{
        if(token == ''){
        alert("Você precisa estar logado")
        navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="GridStyling">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="TypographyStyling">Welcome!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="TypographyStyling">Share your thoughts and express your opinion!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className="ButtonSeePosts">See posts</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.create.vista.com/api/media/medium/221706396/stock-photo-cup-coffee-laptop-program-code?token=" alt="" width="100%" height="500px" />
                </Grid>
                <Grid xs={12} className="Postagens">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;