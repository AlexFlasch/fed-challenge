import React from 'react';
import PropTypes from 'prop-types';

import PagesSection from './sections/PagesSection';

import StyledFooter from './styles/StyledFooter';

const Footer = props => {
  return (
    <StyledFooter>
      <PagesSection />
    </StyledFooter>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
