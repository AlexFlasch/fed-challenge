import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import StyledHero from './styles/StyledHero';

const Hero = props => {
  return (
    <StyledHero>
      <h1 className="hero-text">
        The best personal training,
        <br />
        right in your own home
      </h1>
      <Button className="hero-btn">Join iFit Coach</Button>
    </StyledHero>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
