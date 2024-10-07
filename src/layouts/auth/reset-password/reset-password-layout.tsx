import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: 'grey',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: '50%',
}));

interface ResetPasswordLayoutProps {
  children: ReactNode;
}

export const ResetPasswordLayout: FC<ResetPasswordLayoutProps> = ({ children }) => {
  return (
    <LayoutRoot>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1 1 auto',
        }}
      >
        <Container maxWidth="sm">{children}</Container>
      </Box>
    </LayoutRoot>
  );
};

ResetPasswordLayout.propTypes = {
  children: PropTypes.node,
};
