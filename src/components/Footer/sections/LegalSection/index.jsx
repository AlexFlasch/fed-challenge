import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../components/Dropdown';

import StyledLegalSection from './styles/StyledLegalSection';

const LegalSection = props => {
  const languageOptions = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Français',
      value: 'fr',
    },
    {
      label: 'Español',
      value: 'es',
    },
    {
      label: '日本語',
      value: 'jp',
    },
    {
      label: '中文',
      value: 'zh',
    },
  ];

  return (
    <StyledLegalSection>
      <Dropdown
        className="language-dropdown"
        options={languageOptions}
        defaultOption={languageOptions[0]}
      />
      <div className="legal-info">
        <span>&copy; iFit.com. All Rights Reserved.</span>
        <a href="">Privacy Policy</a>
        <a href="">Terms of Use</a>
      </div>
    </StyledLegalSection>
  );
};

LegalSection.propTypes = {};

LegalSection.defaultProps = {};

export default LegalSection;
