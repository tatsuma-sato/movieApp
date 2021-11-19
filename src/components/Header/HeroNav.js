import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../../Context/MovieContext'
import Container from '../ReusableComponents/Container'
import HeroNavLogo from './HeroNavLogo'
import HeroNavMenu from './HeroNavMenu'
import HeroNavSearch from './HeroNavSearch'

function HeroNav() {

  const {hiddenMenu, setHiddenMenu} = useContext(MovieContext)

  return (

    <nav >
      <Container>
        <div className="wrapper">
          <HeroNavLogo />
          <HeroNavMenu />
        </div>
        <HeroNavSearch />
        <i className={hiddenMenu ? "fas fa-bars" : "fas fa-times"} id="burger" onClick={() => setHiddenMenu(!hiddenMenu)}></i>
      </Container>
    </nav>
  )
}
export default HeroNav
