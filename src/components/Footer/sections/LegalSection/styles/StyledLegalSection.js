import styled from 'styled-components';

export default styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  padding: 0 40px;

  .language-dropdown {
    justify-self: start;
  }

  .legal-info {
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      margin: 0 10px;
    }

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.textWhite};
      text-decoration: none;

      &:visited {
        color: ${({ theme }) => theme.textWhite};
        text-decoration: none;
      }
    }
  }

  ${({ theme }) => theme.mobileBreakpoint} {
    .legal-info {
      grid-column: 2 / span 2;
      flex-direction: column;
      flex-wrap: nowrap;
      word-wrap: nowrap;
    }
  }
`;
