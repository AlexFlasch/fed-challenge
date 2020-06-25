import React from 'react';
import PropTypes from 'prop-types';

import StyledSocialSection from './styles/StyledSocialSection';

const SocialSection = props => {
  return (
    <StyledSocialSection>
      <a href="">
        <img src="" alt="Youtube Logo" />
      </a>
      <a href="">
        <img src="" alt="Pinterest Logo" />
      </a>
      <a href="">
        <img src="" alt="Facebook Logo" />
      </a>
      <a href="">
        <img src="" alt="Twitter Logo" />
      </a>
      <a href="">
        <img src="" alt="Instagram Logo" />
      </a>
    </StyledSocialSection>
  );
};

SocialSection.propTypes = {};

SocialSection.defaultProps = {};

export default SocialSection;
