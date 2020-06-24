import React from 'react';
import PropTypes from 'prop-types';

import ProductNav from '../../components/ProductNav';
import MainNav from '../../components/MainNav';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';

const HomePage = props => {
  return (
    <>
      <ProductNav />
      <MainNav />
      <Hero />
      <Carousel />
    </>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
