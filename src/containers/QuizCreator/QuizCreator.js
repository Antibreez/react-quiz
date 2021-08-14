import React, { Component } from 'react';
import s from './QuizCreator.scss';

import Button from '../../components/Ui/Button/Button';
import Input from '../../components/Ui/Input/Input';
import Select from '../../components/Ui/Select/Select';
import { createControl, validate, validateForm } from '../../form/FormFramework';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустным',
        id: number,
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустным'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {
    state = { 
        quiz: [],
        rightAnswerId: 1,
        formControls: createFormControls(),
        isFormValid: false
     }

    submitHandler = e => {
        e.preventDefault();
    }

    addQuestionHandler = (e) => {
        e.preventDefault();
    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
               <Auxiliary key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={e => this.changeHandler(e.target.value, controlName)}
                    />
    
                    { controlName === 'question' ? <hr/> : null }
               </Auxiliary>
            )
        })
    }

    selectChangeHandler = e => {
        this.setState({
            rightAnswerId: +e.target.value
        })
    }

    render() { 

        const select = <Select 
            label='Выберите правильный ответ'
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4},
            ]}
        />

        return ( 
            <div className={s.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        { this.renderInputs() }


                        { select }

                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                            disabled={!this.state.quiz.length === 0}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default QuizCreator;