import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
import Octocat from './components/Octocat'
import Nav from './components/Nav'
import AllOctocats from './components/AllOctocats'

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <AllOctocats />
      </div>
    )
  }
}

export default App
