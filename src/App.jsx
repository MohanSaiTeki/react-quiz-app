import React from "react"
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Quizs from "./Components/Quizs"
import {makeStyles} from "@material-ui/core";

const pageStyle = makeStyles( theme =>({
    title: {
        padding: "8px"
    }
}))

const App = () => {
    const classes = pageStyle()

    return(
        <Grid container justify="center">
            <Grid item className={classes.title}>
                <Typography variant={"h5"} component={"h5"}> Title </Typography>
            </Grid>
            <Grid item>
                <Quizs />
            </Grid>
        </Grid>
    )
}

export default App  