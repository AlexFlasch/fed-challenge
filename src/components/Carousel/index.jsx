import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledCarousel from './styles/StyledCarousel';

const Carousel = props => {
  // TODO: animate the items in the carousel when they shift position

  const [items, setItems] = useState(React.Children.toArray(props.children));

  const shiftLeft = () => {
    const itemToLoop = items.splice(0, 1);

    setItems([...items, itemToLoop]);
  };

  const shiftRight = () => {
    const itemToLoop = items.pop();

    setItems([itemToLoop, ...items]);
  };

  return (
    <StyledCarousel>
      <div className="carousel-contents">{items}</div>
      <button className="carousel-btn left" onClick={shiftLeft}>
        <img
          src={process.env.PUBLIC_URL + '/assets/svgs/chevron.svg'}
          alt="previous-item"
        />
      </button>
      <button className="carousel-btn right" onClick={shiftRight}>
        <img
          src={process.env.PUBLIC_URL + '/assets/svgs/chevron.svg'}
          alt="next-item"
        />
      </button>
    </StyledCarousel>
  );
};

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;
