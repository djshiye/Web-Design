import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I'm a passionate Minecraft architect who loves creating stunning structures and environments.
      </Typography>
    </Container>
  );
};

export default About;
