import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography>This is the about page of the blog.</Typography>
    </Container>
  );
};

export default About;
