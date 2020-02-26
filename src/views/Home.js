'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Navbar, LeftNav, MainContainer } from '../components/Home/index'
import { HomeStyle } from './styles/index'

/**
 * Define component
 */

function Home() {
  return (
    <HomeStyle>
      <Navbar />

      <div className="row mx-auto">
        <div className="col-4 col-lg-3 col-xl-2 border-right">
          <LeftNav />
        </div>
        <div className="col-8 col-lg-9 col-xl-10">
          <MainContainer />
        </div>
      </div>
    </HomeStyle>
  )
}

/**
 * Export component
 */

export default Home
