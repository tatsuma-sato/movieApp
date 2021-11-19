import React from 'react'
import HeroNavLink from './HeaderNavLink'
import { useContext } from 'react'
import { MovieContext } from '../../Context/MovieContext'

function HeroNavMenu() {

  const {hiddenMenu} = useContext(MovieContext)

  return (
    <div className={(hiddenMenu ? "hidden" : "") + "headerNavMenu"}>
      <HeroNavLink btnText="Popular"/>
      <HeroNavLink btnText="All Movies"/>
    </div>
  )
}

export default HeroNavMenu
