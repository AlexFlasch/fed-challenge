import styled from 'styled-components';

export default styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.componentBg};
  box-shadow: ${({ theme }) => theme.shadow};

  a.nav-item {
    padding: 1.333rem 2.5rem;

    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.textLight};
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 14px;
  }
`;
