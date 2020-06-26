import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.componentBg};
  color: ${({ theme }) => theme.textDark};
`;
