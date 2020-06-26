import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  padding: 10px;

  .hamburger {
    grid-column: 1 / 1;
    pointer-events: all;
  }

  .brand-logo {
    grid-column: 2;
  }

  .mobile-nav {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 2;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.componentBg};
    box-shadow: ${({ theme }) => theme.hoverShadow};
    color: ${({ theme }) => theme.textLight};
    text-transform: uppercase;
  }

  .nav-section {
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.borderLight};
    margin: 0;
    padding: 15px;
  }

  .nav-item {
    padding: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.borderDark};

    text-decoration: none;
    color: ${({ theme }) => theme.textLight};

    cursor: pointer;

    &:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.textLight};
    }
  }

  .close {
    align-self: flex-start;
    padding: 10px;
  }
`;
