import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './styles/StyledCard';

const Card = props => {
  return (
    <StyledCard
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      {...props}
    >
      {props.children}
    </StyledCard>
  );
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Card.defaultProps = {
  width: 'auto',
  height: 'auto',
  margin: '0',
  padding: '0',
};

export default Card;
