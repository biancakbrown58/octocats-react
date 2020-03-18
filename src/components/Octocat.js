import React from 'react'

class Octocat extends React.Component {
  render() {
    return (
      <li>
        <img class="big" src={this.props.imageUrl} alt={this.props.alt} />
        <section>
          <p class="number">#1:</p>
          <p class="name">{this.props.name}</p>
          <p class="minipic">
            <img src={this.props.imageUrl} />
          </p>
        </section>
      </li>
    )
  }
}

export default Octocat
