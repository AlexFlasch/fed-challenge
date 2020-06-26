import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import theme from '../../global-styles/theme';

import ProductNav from '../ProductNav';
import MainNav from '../MainNav';
import MobileNav from '../MobileNav';

const TopNav = props => {
  let viewportWidth = window.innerWidth;

  useEffect(() => {
    viewportWidth = window.innerWidth;
    console.log('window width: ', viewportWidth);
  }, [window.innerWidth]);

  return viewportWidth > theme.mobileBreakpointNoUnit ? (
    <>
      <ProductNav />
      <MainNav />
    </>
  ) : (
    <MobileNav />
  );
};

TopNav.propTypes = {};

TopNav.defaultProps = {};

export default TopNav;
