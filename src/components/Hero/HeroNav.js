import React from 'react'
import { useContext } from 'react'

import Container from '../ReusableComponents/Container'
import HeroNavLogo from './HeroNavLogo'
import HeroNavMenu from './HeroNavMenu'
import HeroNavSearch from './HeroNavSearch'

function HeroNav() {
  return (

    <nav >
      <Container>
        <div className="wrapper">
          <HeroNavLogo />
          <HeroNavMenu />
        </div>
        <HeroNavSearch />
        <i className="fas fa-bars"></i>
      </Container>
    </nav>
  )
}
export default HeroNav
