import React, {Component} from 'react';
import s from './Drawer.scss';
import cl from 'classnames';
import { NavLink } from 'react-router-dom';

import Backdrop from '../../Ui/Backdrop/Backdrop';

const links = [
  {to: '/', label: 'Список', exact: true},
  {to: '/auth', label: 'Авторизация', exact: false},
  {to: '/quiz-creator', label: 'Создать тест', exact: false},
]

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={s.active}
            onClick={this.props.onClose}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <>
        <nav 
          className={ cl(
            s.Drawer,
            { [s.close]: !this.props.isOpen }
        )}>
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>

        { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
      </>
    )
  }
}

export default Drawer