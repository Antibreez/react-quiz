import React from 'react';
import s from './AnswerItem.scss';
import cl from 'classnames';

const AnswerItem = props => {

    return (
        <li 
            className={ cl(s.AnswerItem, { [s[props.state]]: !!props.state }) }
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem;