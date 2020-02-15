import React from "react"
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import {Grid, makeStyles, Typography} from "@material-ui/core";


const pageStyle = makeStyles( theme =>({
    questionTitle: {
        margin: "0px 0px 0px 4px"
    },
    questionNumber: {
      margin: "0px 0px 10px 0px"
    },
    question: {
        padding: "1.0rem",
        border: "2px solid #5685FF",
        borderRadius: "8px",
        boxShadow: "0px 6px 16px #E9E9E9",
    },
    options: {
        padding: "0.8rem",
        marginTop: "0.8rem",
        marginBottom: "0.8rem",
        borderRadius: "8px"
    },
    PaperOption: {
        borderRadius: "8px",
        boxShadow: "0px 6px 16px #E9E9E9"
    },
    prevButton: {
        padding: "8px",
        marginRight: "12px",
        boxShadow: "0px 6px 16px #E9E9E9",
        border: "0px",
        borderRadius: "12px"
    },
    nextButton: {
        padding: "8px",
        marginLeft: "12px",
        boxShadow: "0px 6px 16px #E9E9E9",
        border: "0px",
        borderRadius: "12px"
    }
}))


const Template = (props) => {
    let classes = pageStyle()

    return (
        <Grid container>
            <Grid item sm={12}>
                <Paper className={classes.question}>
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
                                    <Paper key={index} className={classes.PaperOption} >
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