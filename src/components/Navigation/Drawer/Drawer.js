import React, {Component} from 'react';
import s from './Drawer.scss';
import cl from 'classnames';
import { NavLink } from 'react-router-dom';

import Backdrop from '../../Ui/Backdrop/Backdrop';

class Drawer extends Component {

  renderLinks(links) {
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
    const links = [];

    if (this.props.isAuthenticated) {
      links.push({to: '/', label: 'Список', exact: true})
      links.push({to: '/quiz-creator', label: 'Создать тест', exact: false})
      links.push({to: '/logout', label: 'Выйти', exact: false})
    } else {
      links.push({to: '/auth', label: 'Авторизация', exact: false})
    }

    return (
      <>
        <nav 
          className={ cl(
            s.Drawer,
            { [s.close]: !this.props.isOpen }
        )}>
          <ul>
            { this.renderLinks(links) }
          </ul>
        </nav>

        { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
      </>
    )
  }
}

export default Drawer