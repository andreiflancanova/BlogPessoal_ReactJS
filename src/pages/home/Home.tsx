import React from "react";
import{Grid,Button,Typography} from "@material-ui/core"
import { Box } from "@mui/material"

import "./Home.css";
function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Welcome!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Share your thoughts and express your opinion!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#2e86de", color: "white" }}>See posts</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.create.vista.com/api/media/medium/221706396/stock-photo-cup-coffee-laptop-program-code?token=" alt="" width="100%" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;