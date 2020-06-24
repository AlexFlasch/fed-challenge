import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './styles/StyledCard';

const Card = props => {
  return (
    <StyledCard width={props.width} height={props.height}>
      {props.children}
    </StyledCard>
  );
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Card.defaultProps = {};

export default Card;
