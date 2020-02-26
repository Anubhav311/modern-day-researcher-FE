'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { LeftNavStyle } from './styles/index'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

/**
 * Define component
 */

function LeftNav() {
  return (
    <LeftNavStyle>
      <section>
        <CategoryForm />
        <CategoryList />
      </section>
    </LeftNavStyle>
  )
}

/**
 * Export component
 */

export default LeftNav
