import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.textWhite};

  hr {
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.borderLight};
    margin: 18px 0;
  }
`;
