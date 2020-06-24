import styled from 'styled-components';
import { modularScale } from 'polished';

export default styled.button`
  background-color: ${({ theme }) => theme.ctaBg};
  color: ${({ theme }) => theme.ctaText};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${modularScale(-1)} ${modularScale(1)};
  text-transform: uppercase;
  font-weight: bold;
`;
