import React, {useState} from "react"

import {Grid, makeStyles} from "@material-ui/core"
import Template from "./Quiztemplate/Template"
import Paper from "@material-ui/core/Paper";
import ShowNoOfQuestions from "./ShowNoOfQuestions"
import Hint from "./Hint"
import {values} from "./values"

const  pageStyle = makeStyles(theme => ({
    leftPanel: {
        padding: "1rem"
    },
    rightPanel: {
        padding: "0.4rem"
    },
    NoOfQuestions: {
        height: "300px",
        padding: "0.6rem",
        margin: "0.6rem",
        boxShadow: "0px 6px 16px #E9E9E9",
        borderRadius: "12px"
    },
})
)


const Quizs = () => {
    const classes = pageStyle()

    let [quesNum, setQuesNum] = useState(0)
    let questions = values[0].questions[quesNum]
    let questionsLength = values[0].questions.length

    let [questionsStatus, setQuestionsStatus] = useState(Array(questionsLength).fill(0))


    const checkAnswer = (questionNumber, correctAnswer, chosenValue) => {

        setQuestionsStatus(() => {
            let newArrayValues =  questionsStatus.map((val, index) => {
                if (questionNumber === index) {
                    if (correctAnswer === chosenValue) {
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    return val
                }
            })
            return newArrayValues
        })
    }

    const nextQuestion = () => {
        setQuesNum( quesNum = quesNum + 1 )
    }

    const prevQuestion = () => {
        setQuesNum( quesNum = quesNum - 1 )
    }

    return (
            <React.Fragment>
                <Grid container >
                    <Grid item xs={12} sm={9} className={classes.leftPanel}>
                        <Template
                            quesNum={quesNum}
                            questions={questions}
                            questionsLength={questionsLength}
                            nextQuestion={nextQuestion}
                            prevQuestion={prevQuestion}
                            questionsStatus={questionsStatus}
                            checkAnswer={checkAnswer}
                        />
                        <Hint />
                    </Grid>
                    <Grid item sm={3} className={classes.rightPanel}>
                        <Paper className={classes.NoOfQuestions}>
                            <ShowNoOfQuestions
                                quesNum={quesNum}
                                questionsLength={questionsLength}
                                questionsStatus={questionsStatus}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
}

export default Quizs
