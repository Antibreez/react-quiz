import React, {Component} from 'react';
import s from './Quiz.scss'

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/Ui/Loader/Loader';

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [],
        loading: true,
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (answerId === question.rightAnswerId) {
            if (!results[this.state.activeQuestion + 1]) {
                results[this.state.activeQuestion + 1] = 'success'
            }

            this.setState(() => {
                return {
                    answerState: {[answerId]: 'success'},
                    results
                }
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState(({ activeQuestion }) => {
                        return {
                            activeQuestion: activeQuestion + 1,
                            answerState: null
                        }    
                    })

                }

                window.clearTimeout(timeout);
            }, 1000)

        } else {
            results[this.state.activeQuestion + 1] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 >= this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
            const quiz = response.data;

            this.setState({
                quiz,
                loading: false
            })
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={s.Quiz}>

                <div className={s.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : this.state.loading
                            ? <Loader/>
                            : <ActiveQuiz 
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;