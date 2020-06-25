import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './styles/StyledCard';

const Card = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
