import React from 'react';
import s from './Backdrop.scss';

const Backdrop = props => <div
  className={s.Backdrop}
  onClick={props.onClick}
>
</div>

export default Backdrop;