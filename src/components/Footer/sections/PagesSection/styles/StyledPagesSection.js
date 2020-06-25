import styled from 'styled-components';

export default styled.section`
  font-size: 14px;

  nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 48px 20vw;
  }

  .page-list-title {
    font-weight: bold;
  }

  .page-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 1em 0;
    }

    a {
      color: ${({ theme }) => theme.textWhite};
      text-decoration: none;

      &:visited {
        color: ${({ theme }) => theme.textWhite};
        text-decoration: none;
      }
    }
  }
`;
