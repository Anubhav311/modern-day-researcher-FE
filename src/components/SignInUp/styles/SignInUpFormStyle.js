'use strict'

/**
 * Dependencies
 */

import styled from 'styled-components'

/**
 * Define style
 */

const SignInUpFormStyle = styled.div(() => `
  margin-bottom: 5rem !important;

  button {
    font-size: 1.5rem !important;
  }

  h2 {
    text-align: center;
  }

  .text-primary {
    color: #007bff !important;
  }

  .text-danger {
    color: #dc3545 !important;
  }

  .form-group {
    margin-bottom: 1rem;
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
    text-decoration: none;
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
    font-size: 1.3rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  .btn-primary:not(:disabled):not(.disabled).active,
  .btn-primary:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #0062cc;
    border-color: #005cbf;
  }

  .btn-primary.focus, .btn-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(38,143,255,.5);
  }

  .btn.focus, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  .btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }

  .btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }

  .btn-success.focus, .btn-success:focus {
    box-shadow: 0 0 0 0.2rem rgba(72,180,97,.5);
  }

  .btn-success:not(:disabled):not(.disabled).active, .btn-success:not(:disabled):not(.disabled):active, .show>.btn-success.dropdown-toggle {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .text-center {
    text-align: center !important;
  }

  .mt-4 {
    margin-top: 1.5rem !important;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-10 {
    margin-bottom: 5rem !important;
  }

  .alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
`)

/**
 * Export style
 */

export default SignInUpFormStyle
