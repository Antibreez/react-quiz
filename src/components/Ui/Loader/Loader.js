import React from 'react';
import s from './Loader.scss';

const Loader = props => { 
  return (
    <div className={s.center}>
      <div className={s.Loader}>
        <div /><div />
      </div>
    </div>
  )
}

export default Loader;