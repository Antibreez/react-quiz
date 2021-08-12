import React from 'react';
import s from './Button.scss';
import cl from 'classnames';

const Button = props => {

    return (
        <button
            onClick={props.onClick}
            className={ cl(s.Button, s[props.type]) }
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button