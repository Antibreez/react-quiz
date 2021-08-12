import React, {Component} from 'react';
import s from './Drawer.scss';
import cl from 'classnames';

import Backdrop from '../../Ui/Backdrop/Backdrop';

const links = [
  1, 2, 3
]

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
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