import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0', textAlign: 'center' }}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
