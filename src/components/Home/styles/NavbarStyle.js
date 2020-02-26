'use strict'

/**
 * Dependencies
 */

import styled from 'styled-components'

/**
 * Define style
 */

const NavbarStyle = styled.div(() => `
  .bg-light {
    background-color: #f8f9fa !important;
  }

  .bg-dark {
    background-color: #343a40 !important;
  }

  .navbar {
    position: relative;
    padding: .5rem 1rem;
  }

  .navbar-dark .navbar-brand {
    color: #fff;
  }

  .navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }

  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }

  .navbar-dark .navbar-toggler {
    color: rgba(255,255,255,.5);
    border-color: rgba(255,255,255,.1);
  }

  .navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
  }

  .navbar-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .mr-auto, .mx-auto {
    margin-right: auto !important;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  form-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
  }

  form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
  }

  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
  }

  .btn-outline-light:hover {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  @media (min-width: 576px) {
    background-color: red;

    .form-inline .form-control {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    }

    .mr-sm-2, .mx-sm-2 {
      margin-right: .5rem!important;
    }
  }

  @media (min-width: 992px) {
    background-color: blue;

    .navbar-expand-lg .navbar-toggler {
      display: none;
    }

    .navbar-expand-lg .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex!important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }

    navbar-expand-lg .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }
`)

/**
 * Export style
 */

export default NavbarStyle
