import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    position: relative;

    width: 40px;
    height: 40px;
    margin: 0 16px;

    border-radius: 35px;

    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.socialGradient};
      border-radius: 40px;
      z-index: -1;
    }
  }

  .img-mask {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;
    background-color: ${({ theme }) => theme.footerBg};
    border-radius: 38px;
  }

  img {
    width: 50%;
    height: 50%;
  }
`;
