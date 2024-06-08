import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Portfolio = () => {
  const projects = [
    {
      title: 'Castle',
      image: 'castle.jpg',
      description: 'A majestic castle built in Minecraft.',
    },
    {
      title: 'Modern House',
      image: 'modern-house.jpg',
      description: 'A sleek modern house.',
    },
    // Add more projects as needed
  ];

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
