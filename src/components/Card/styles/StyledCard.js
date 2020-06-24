import styled from 'styled-components';
import { modularScale } from 'polished';
import { motion } from 'framer-motion';

export default styled(motion.div)`
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? '100%'};

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.componentBg};
  color: ${({ theme }) => theme.textDark};
`;
