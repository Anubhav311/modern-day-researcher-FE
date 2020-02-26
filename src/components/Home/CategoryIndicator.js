'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { CategoryIndicatorStyle } from './styles/index'

/**
 * Define component
 */

function CategoryIndicator({ color, name }) {
  return (
    <CategoryIndicatorStyle>
      <span className="glyph__circle" style={{ backgroundColor: color }}></span>
    </CategoryIndicatorStyle>
  )
}

/**
 * Export component
 */

export default CategoryIndicator
