import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1">
        Details about various Minecraft architecture projects.
      </Typography>
    </Container>
  );
};

export default Projects;
