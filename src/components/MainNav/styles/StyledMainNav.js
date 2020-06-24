import styled from 'styled-components';
import { modularScale } from 'polished';

export default styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a.nav-item {
    padding: ${modularScale(1)} ${modularScale(3)};

    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.textLight};
    letter-spacing: 1px;
    line-height: 14px;
  }
`;
