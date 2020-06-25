import styled from 'styled-components';

import Card from '../../../../../components/Card';

export default styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 30vw;

  margin: 0 12px;
  padding: 48px 40px;

  color: ${({ theme }) => theme.textDark};
  opacity: 0.8;

  span {
    margin-top: 16px;
    text-align: center;
  }
`;
