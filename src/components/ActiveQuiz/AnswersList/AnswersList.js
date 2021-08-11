import React from 'react';
import s from './AnswersList.scss';

import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul className={s.AnswersList}>
        { props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        }) }
    </ul>
);

export default AnswersList;