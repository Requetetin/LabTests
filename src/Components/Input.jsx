import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Input.css'

const Input = ({ value, onChange }) => (
  <input className="input" maxLength="9" value={value} onChange={onChange} />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

Input.defaultProps = {
  value: null,
}

export default Input
