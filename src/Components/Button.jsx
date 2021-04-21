import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Buttons.css'

const Button = ({ title, className, onClick }) => (
  <button className={className} type="button" onClick={onClick}>{title}</button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
