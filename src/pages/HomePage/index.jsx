import React from 'react';
import PropTypes from 'prop-types';

import ProductNav from '../../components/ProductNav';
import MainNav from '../../components/MainNav';

const HomePage = props => {
  return (
    <>
      <ProductNav />
      <MainNav />
    </>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
