import React from 'react';
import s from './FinishedQuiz.scss';
import cl from 'classnames';

import Button from '../../components/Ui/Button/Button';

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }

    return total
  }, 0)

  console.log(props.results);

  return (
    <div className={s.FinishedQuiz}>
      <ul>
        {
          props.quiz.map((quizItem, index) => {


            console.log(props.results[quizItem.id]);

            return (
              <li
                key={index}
              >
                <strong>{index + 1}</strong>&nbsp;
                {quizItem.question}
                <i 
                  className={ cl(
                    'fa', 
                    { 'fa-times ': props.results[quizItem.id] === 'error' }, 
                    { [s.error]: props.results[quizItem.id] === 'error' },
                    { 'fa-check ': props.results[quizItem.id] === 'success' }, 
                    { [s.success]: props.results[quizItem.id] === 'success' },
                  )} 
                />
              </li>
            )
          })
        }
        {/* <li>
          <strong>1. </strong>
          How are you
          <i className={ cl('fa fa-times ', s.error) } />
        </li>
        <li>
          <strong>1. </strong>
          How are you
          <i className={ cl('fa fa-check ', s.success) } />
        </li> */}
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <Button
          onClick={props.onRetry}
          type='primary'
        >
          Повторить
        </Button>
        
        <Button
          type='success'
        >
          Перейти в список тестов
        </Button>
      </div>
    </div>
  )
};

export default FinishedQuiz;