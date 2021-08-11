import React from 'react';
import s from './AnswerItem.scss';

const AnswerItem = props => {
    return (
        <li 
            className={s.AnswerItem}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem;