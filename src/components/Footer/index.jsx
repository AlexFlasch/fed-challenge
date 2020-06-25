import React from 'react';
import PropTypes from 'prop-types';

import PagesSection from './sections/PagesSection';
import SocialSection from './sections/SocialSection';
import LegalSection from './sections/LegalSection';

import StyledFooter from './styles/StyledFooter';

const Footer = props => {
  return (
    <StyledFooter>
      <PagesSection />
      <hr />
      <SocialSection />
      <hr />
      <LegalSection />
    </StyledFooter>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
