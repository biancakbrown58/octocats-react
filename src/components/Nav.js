import React, { Component } from 'react'
import Logo from '../images/GitHub-Mark-32px.png'

class Nav extends Component {
  render() {
    return (
      <div>
        <header class="header">
          <nav>
            <ul>
              <li>
                <img src={Logo} />
              </li>
              <li class="octodex">Octodex</li>
              <li class="home">Home</li>
              <li class="faq">FAQ</li>
            </ul>
            <ul>
              <li class="twitter">Follow us on Twitter</li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Nav
