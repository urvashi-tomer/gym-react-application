import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img src={logo} alt="logo" width="150px" height="30px" />
        <Typography pb="40px">
          Copyright &copy; Tomer
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer