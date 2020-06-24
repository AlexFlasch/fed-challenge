import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles/StyledButton';

const Button = props => {
  return <StyledButton>{props.children}</StyledButton>;
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
