'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { MainContainerStyle } from './styles/index'
import SignOutLink from './SignOutLink'
import LinkForm from './LinkForm'
import PriorityLinkList from './PriorityLinkList'
import MainLinkList from './MainLinkList'

/**
 * Define component
 */

function MainContainer() {
  return (
    <MainContainerStyle>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SignOutLink />
              <LinkForm />
              <PriorityLinkList />
              <MainLinkList />
            </div>
          </div>
        </div>
      </section>
    </MainContainerStyle>
  )
}

/**
 * Export component
 */

export default MainContainer
