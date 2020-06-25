import React from 'react';
import PropTypes from 'prop-types';

import StyledDropdownList from './styles/StyledDropdownList';

const DropdownList = React.forwardRef((props, ref) => {
  const listHeight = props.options.length * 40;

  return (
    <StyledDropdownList isOpen={props.isOpen} listHeight={listHeight}>
      <div className="list-container" ref={ref}>
        {props.options.map((option, i) => (
          <button
            key={`option-${i}`}
            className="dropdown-option"
            onClick={() => props.onOptionClick(option.value, option.label)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </StyledDropdownList>
  );
});

DropdownList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  onOptionClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

DropdownList.defaultProps = {
  isOpen: false,
};

export default DropdownList;
