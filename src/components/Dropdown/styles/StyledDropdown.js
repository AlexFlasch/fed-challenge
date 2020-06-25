import styled from 'styled-components';

export default styled.div`
  .dropdown-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 10px;
    border: 1px solid
      ${props => (props.isOpen ? props.theme.borderLight : 'rgba(0, 0, 0, 0)')};
    border-radius: 0 0
      ${({ theme }) => `${theme.borderRadius} ${theme.borderRadius}`};
    background-color: transparent;
    color: ${({ theme }) => theme.textWhite};

    cursor: pointer;
  }

  .dropdown-icon {
    margin: 0 5px;
    justify-self: right;

    &.open {
      transform: rotate(180deg);
    }
  }
`;
