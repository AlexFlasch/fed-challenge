import React from 'react';
import PropTypes from 'prop-types';

import StyledPagesSection from './styles/StyledPagesSection';

const PagesSection = props => {
  return (
    <StyledPagesSection>
      <nav aria-label="more-pages">
        <div className="company-pages">
          <span className="page-list-title">Company</span>
          <ul className="page-list company-page-list">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="account-pages">
          <span className="page-list-title">Account</span>
          <ul className="page-list account-page-list">
            <li>
              <a href="">Log In</a>
            </li>
            <li>
              <a href="">Create Account</a>
            </li>
          </ul>
        </div>
        <div className="support-pages">
          <span className="page-list-title">Support</span>
          <ul className="page-list support-page-list">
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Accessibility</a>
            </li>
          </ul>
        </div>
      </nav>
    </StyledPagesSection>
  );
};

PagesSection.propTypes = {};

PagesSection.defaultProps = {};

export default PagesSection;
