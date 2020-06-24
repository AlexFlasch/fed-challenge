import styled from 'styled-components';
import { modularScale } from 'polished';

export default styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.componentBg};
  box-shadow: ${({ theme }) => theme.shadow};

  a.nav-item {
    padding: ${modularScale(1)} ${modularScale(3)};

    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.textLight};
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 14px;
  }

  a.nav-item.brand-logo {
    font-size: 19px;
  }
`;
