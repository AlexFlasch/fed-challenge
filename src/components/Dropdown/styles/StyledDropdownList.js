import styled from 'styled-components';

export default styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};

  position: absolute;
  top: ${props => `-${props.listHeight}px`};
  left: 0;

  width: 100%;

  overflow-y: hidden;
  overflow-x: hidden;

  box-shadow: ${({ theme }) => theme.hoverShadow};

  border: 1px solid ${({ theme }) => theme.borderLight};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} 0 0`};

  .list-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;

    width: 100%;
  }

  .dropdown-option {
    text-align: center;

    height: 40px;

    padding: 10px;

    background-color: ${({ theme }) => theme.footerBg};
    color: ${({ theme }) => theme.textWhite};
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.borderLight};

    cursor: pointer;
  }
`;
