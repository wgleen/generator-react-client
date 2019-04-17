import React from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const TextFieldRedux = props => (
  <Field
    {...props}
    component={TextField}
  />
)

export default TextFieldRedux
