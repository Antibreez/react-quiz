import React, {Component} from 'react'
import s from './Layout.scss'

class Layout extends Component {
  render() {
    return (
      <div className={s.Layout}>
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout