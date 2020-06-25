import styled from 'styled-components';

import Card from '../../../../../components/Card';

export default styled(Card)`
  overflow: hidden;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .equipment-img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 85%;

    img {
      display: inline-block;
      width: auto;
      max-height: 100%;
    }
  }

  .equipment-name {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
`;
