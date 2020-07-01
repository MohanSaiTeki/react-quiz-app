import React from "react"
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import {Grid, Typography} from "@material-ui/core";

import { pageStyle } from "./Style"


const Template = (props) => {
    let classes = pageStyle()

    return (
        <Grid container>
            <Grid item sm={12}>
                <Paper className={classes.questionPaper}>
                    <Typography className={classes.questionNumber}>Question {props.quesNum + 1}</Typography>
                    <Typography className={classes.questionTitle}>{props.questions.Q}</Typography>
                </Paper>
            </Grid>
            <Grid item sm={12}>
                <Grid container >
                    <Grid item sm={12}>
                        {
                            props.questions.O.map( ( option, index) => {
                                return(
                                    <Paper key={index} className={classes.optionsPaper} >
                                        <ListItem button  className={classes.options} onClick={() => props.checkAnswer(props.quesNum, props.questions.A ,option.value)}>
                                            <Typography > {index+1}) { option.value } </Typography>
                                        </ListItem>
                                    </Paper>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={12} >
                <Grid container justify={"center"}>
                <Button className={classes.prevButton}  color="primary" onClick={() => props.prevQuestion()} disabled={ props.quesNum === 0 }> Prev </Button>
                <Button className={classes.nextButton}  color="primary" onClick={() => props.nextQuestion()} disabled={ props.quesNum === props.questionsLength - 1}> Next</Button>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Template