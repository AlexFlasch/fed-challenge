import React from 'react';
import PropTypes from 'prop-types';

import StyledProductNav from './styles/StyledProductNav';

const ProductNav = props => {
  return (
    <StyledProductNav className="product-nav" aria-label="product-navigation">
      <a href="" className="nav-item">
        blog
      </a>
      <a href="" className="nav-item">
        nourish
      </a>
      <a href="" className="nav-item">
        shop
      </a>
    </StyledProductNav>
  );
};

ProductNav.propTypes = {};

ProductNav.defaultProps = {};

export default ProductNav;
