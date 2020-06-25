import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import DropdownList from './DropdownList';
import useDropdown from './hooks/use-dropdown';

import StyledDropdown from './styles/StyledDropdown';

const Dropdown = props => {
  const [selectedOption, setSelectedOption] = useState(
    props.defaultOption ?? props.options[0],
  );
  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  const [isOpen, toggleOpen] = useDropdown(listRef, dropdownRef);

  const onOptionSelect = (value, label) => {
    setSelectedOption({ label, value });

    props.handleChange({ label, value });
  };

  return (
    <StyledDropdown
      className={props.className}
      onClick={toggleOpen}
      isOpen={isOpen}
    >
      <div className="dropdown-container" ref={dropdownRef}>
        <p className="selected-item">{selectedOption.label}</p>
        <img
          src={process.env.PUBLIC_URL + '/assets/svgs/dropdown-arrow.svg'}
          alt=""
          className={`dropdown-icon ${isOpen ? 'open' : ''}`}
        />
        <DropdownList
          isOpen={isOpen}
          options={props.options}
          onOptionClick={onOptionSelect}
          ref={listRef}
        />
      </div>
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ),
  defaultOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  }),
  handleChange: PropTypes.func,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  handleChange: () => {},
};

export default Dropdown;
