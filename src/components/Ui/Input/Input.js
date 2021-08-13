import React from 'react';
import s from './Input.scss';
import cl from 'classnames';

function isInvalid({ valid, touched, shouldValidate }) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <div className={ cl(s.Input, {[s.invalid]: isInvalid(props)}) }>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props)
                    ? <span>{ props.errorMessage || 'Введите верное значение' }</span>
                    : null
            }

            
        </div>
    )
}

export default Input;
