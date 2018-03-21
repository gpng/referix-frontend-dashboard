// module imports
import React from 'react';
import FlexView from 'react-flexview';
import { CustomInput } from 'components';

// local imports

// style imports

export const required = value => (value ? undefined : 'Required');
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const renderField = ({
  formControl,
  input,
  label,
  type,
  required,
  fullWidth,
  meta: { touched, error, warning }
}) => (
  <FlexView grow style={{ marginBottom: 0 }}>
    <FlexView grow>
      <CustomInput
        inputProps={{ ...input, type: type }}
        formControlProps={{
          ...formControl,
          required: required,
          fullWidth: fullWidth
        }}
        error={Boolean(touched && error)}
        labelText={Boolean(touched && error) ? label + ' - ' + error : label}
      />
    </FlexView>
  </FlexView>
);
