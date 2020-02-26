'use strict'

/**
 * Dependencies
 */

import styled from 'styled-components'

/**
 * Define style
 */

const CategoryStyle = styled.li(() => `
  .glyph__circle {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }

  .text__category { }

  .btn__delete {
    color: #DDD;
    float: right;
    padding: 0px 5px;
    margin: 0px 10px;
    cursor: pointer;

    &:hover {
      color: #AAA;
    }
  }

  .col__category {
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
        box-shadow: 1px 1px 3px rgba(129, 129, 129, 0.46);
        border-radius: 3px;
      }
    }
  }
`)

/**
 * Export style
 */

export default CategoryStyle
