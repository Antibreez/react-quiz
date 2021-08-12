import React from 'react';
import cl from 'classnames';
import s from './MenuToggle.scss';

const MenuToggle = props => {
    return (
        <i
            className={ cl(
                s.MenuToggle, 
                'fa',
                {'fa-times': props.isOpen},
                {[s.open]: props.isOpen},
                {'fa-bars': !props.isOpen}
            ) }
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle;