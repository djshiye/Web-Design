import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">About Dino's Amazing Blog</Typography>
      <Typography paragraph>
        Welcome to Dino's Amazing Blog, where we explore a world of endless possibilities through the power of words.
      </Typography>
      <Typography paragraph>
        Dino, the founder and chief storyteller behind this blog, believes in the magic of storytelling to inspire, entertain, and educate. 
        With a passion for writing and a curious mind, Dino embarked on this journey to share captivating stories, insightful reflections, and valuable knowledge with the world.
      </Typography>
      <Typography paragraph>
        At Dino's Amazing Blog, you'll find a diverse range of topics, from travel adventures to personal development insights, from book reviews to tech trends, 
        all crafted with care and creativity to engage and delight our readers.
      </Typography>
      <Typography paragraph>
        Join us on this exciting adventure as we explore the wonders of life, one story at a time. Thank you for being a part of our community!
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '2rem' }}>
        &copy; 2024 Dino's Amazing Blog. All rights reserved.
      </Typography>
    </Container>
  );
};

export default About;
