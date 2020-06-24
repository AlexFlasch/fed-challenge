import React from 'react';
import PropTypes from 'prop-types';

import chevron from '../../assets/svgs/chevron.svg';

import StyledCarousel from './styles/StyledCarousel';

const Carousel = props => {
  return (
    <StyledCarousel>
      <button className="carousel-btn left">
        <img src={chevron} alt="previous-item" />
      </button>
      <button className="carousel-btn right">
        <img src={chevron} alt="next-item" />
      </button>
      <div className="carousel-contents">{props.children}</div>
    </StyledCarousel>
  );
};

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;
