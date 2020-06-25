import React from 'react';
import PropTypes from 'prop-types';

import StyledSocialSection from './styles/StyledSocialSection';

const SocialSection = props => {
  return (
    <StyledSocialSection>
      <a href="">
        <div className="img-mask">
          <img
            src={process.env.PUBLIC_URL + '/assets/svgs/youtube.svg'}
            alt="Youtube Logo"
          />
        </div>
      </a>
      <a href="">
        <div className="img-mask">
          <img
            src={process.env.PUBLIC_URL + '/assets/svgs/pinterest.svg'}
            alt="Pinterest Logo"
          />
        </div>
      </a>
      <a href="">
        <div className="img-mask">
          <img
            src={process.env.PUBLIC_URL + '/assets/svgs/facebook.svg'}
            alt="Facebook Logo"
          />
        </div>
      </a>
      <a href="">
        <div className="img-mask">
          <img
            src={process.env.PUBLIC_URL + '/assets/svgs/twitter.svg'}
            alt="Twitter Logo"
          />
        </div>
      </a>
      <a href="">
        <div className="img-mask">
          <img
            src={process.env.PUBLIC_URL + '/assets/svgs/instagram.svg'}
            alt="Instagram Logo"
          />
        </div>
      </a>
    </StyledSocialSection>
  );
};

SocialSection.propTypes = {};

SocialSection.defaultProps = {};

export default SocialSection;
