import React from "react";
import{Grid,Paper,Button} from "@material-ui/core"
import { Box } from "@mui/material"

import "./Home.css";


function Home(){
    return(
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                        <img src="https://img.freepik.com/free-photo/background-image-open-laptop-with-code-screen-desk-it-developers-office-copy-space_236854-29620.jpg"
                            alt="Dev Office Background"
                            style={{width:"100%",height:"100%"}}/>
                        <Box display="flex" justifyContent="center" p={2}>
                            <Button variant="contained" color="primary">Texto 01</Button>
                            <Button variant="contained" color="secondary">Texto 02</Button>
                        </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;