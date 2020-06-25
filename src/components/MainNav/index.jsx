import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import StyledMainNav from './styles/StyledMainNav';

const MainNav = props => {
  return (
    <StyledMainNav className="main-nav" aria-label="page-navigation">
      <a href="" className="nav-item brand-logo">
        <img
          src={process.env.PUBLIC_URL + '/assets/svgs/brand-logo.svg'}
          alt="iFit Logo"
        />
      </a>
      <div className="nav-item nav-links">
        <a href="" className="nav-item">
          exercise
        </a>
        <a href="" className="nav-item">
          nutrition
        </a>
        <a href="" className="nav-item">
          activity
        </a>
        <a href="" className="nav-item">
          sleep
        </a>
      </div>
      <a href="" className="nav-item nav-cta">
        <Button>sign up</Button>
      </a>
    </StyledMainNav>
  );
};

MainNav.propTypes = {};

MainNav.defaultProps = {};

export default MainNav;
