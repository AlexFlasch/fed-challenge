import styled from 'styled-components';
import { modularScale } from 'polished';

export default styled.nav`
  display: flex;

  border-bottom: 1px solid ${({ theme }) => theme.borderDark};

  a.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${modularScale(1)} ${modularScale(3)};
    border-right: 1px solid ${({ theme }) => theme.borderDark};

    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.textLight};
    letter-spacing: 1px;
    line-height: 14px;
  }
`;
