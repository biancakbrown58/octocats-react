import React, { Component } from 'react'
import Octocat from './Octocat'

import Bewitched from '../images/bewitchedtocat.jpg'
import Chello from '../images/chellocat.jpg'
import Defunck from '../images/defunktocat.jpg'
import FemaleCoder from '../images/femalecodertocat.png'
import Homer from '../images/homercat.png'
import Link from '../images/linktocat.jpg'
import Oktober from '../images/oktobercat.png'
import Plumber from '../images/plumber.jpg'
import Riddlo from '../images/riddlocat.png'
import Skate from '../images/skatetocat.png'
import Snowco from '../images/snowoctocat.png'
import Waldo from '../images/waldocat.png'

export class AllOctocats extends Component {
  render() {
    return (
      <div>
        <main>
          <section class="images">
            <ul>
              <Octocat
                name="Bewitched To Cat"
                imageUrl={Bewitched}
                alt="Bewitched To Cat"
              />

              <Octocat name="Chello Cat" imageUrl={Chello} alt="Chello Cat" />
              <Octocat
                name="Defunck to Cat"
                imageUrl={Defunck}
                alt="Defunck to Cat"
              />
              <Octocat
                name="Female Coder to Cat"
                imageUrl={FemaleCoder}
                alt="Female Coder to Cat"
              />
              <Octocat name="Homer Cat" imageUrl={Homer} alt="omer Cat" />
              <Octocat name="Link to Cat" imageUrl={Link} alt="Link to Cat" />
              <Octocat
                name="Oktober Cat"
                imageUrl={Oktober}
                alt="Oktober Cat"
              />
              <Octocat
                name="Plumber Cat"
                imageUrl={Plumber}
                alt="Plumber Cat"
              />
              <Octocat name="Riddlo Cat" imageUrl={Riddlo} alt="Riddlo Cat" />
              <Octocat
                name="Skate to Cat"
                imageUrl={Skate}
                alt="Skate to  Cat"
              />
              <Octocat
                name="Snowoc to Cat"
                imageUrl={Snowco}
                alt="Snowoc to Cat"
              />
              <Octocat name="Waldo Cat" imageUrl={Waldo} alt="Waldo Cat" />
            </ul>
          </section>
        </main>
      </div>
    )
  }
}

export default AllOctocats
