import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Testimonials = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Testimonials
      </Typography>
      <Typography variant="body1">
        What people are saying about my Minecraft architecture work.
      </Typography>
    </Container>
  );
};

export default Testimonials;
