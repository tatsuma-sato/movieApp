import React from 'react'
import HeroNavLink from './HeroNavLink'

function HeroNavMenu() {
  return (
    <div className="heroNavMenu">
      <HeroNavLink btnText="Popular"/>
      <HeroNavLink btnText="All Movies"/>
    </div>
  )
}

export default HeroNavMenu
