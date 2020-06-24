import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

import StyledCarousel from './styles/StyledCarousel';

const Carousel = props => {
  return (
    <StyledCarousel>
      <button className="carousel-btn left">
        <div className="chevron" />
      </button>
      <button className="carousel-btn right">
        <div className="chevron" />
      </button>
    </StyledCarousel>
  );
};

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;
