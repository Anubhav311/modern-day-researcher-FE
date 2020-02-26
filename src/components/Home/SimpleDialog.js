'use strict'

/**
 * Dependencies
 */

import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

/**
 * Define component
 */

function SimpleDialog(props) {
  function handleClose() {
    props.onClose(props.selectedValue)
  }

  function handleListItemClick(value) {
    props.onClose(value)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Simple Dialog</DialogTitle>
    </Dialog>
  )
}

/**
 * Export component
 */

export default SimpleDialog
