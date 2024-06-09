import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <div style={{ background: "url('https://images.unsplash.com/photo-1600762516498-761775b86af7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Paper elevation={3} style={{ padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10 }}>
          <Typography variant="h4" gutterBottom align="center" style={{ color: '#333333', marginBottom: 20 }}>About Dino's Amazing Blog</Typography>
          <Typography paragraph style={{ color: '#555555', marginBottom: 20 }}>
            Welcome to Dino's Amazing Blog, where we explore a world of endless possibilities through the power of words.
          </Typography>
          <Typography paragraph style={{ color: '#555555', marginBottom: 20 }}>
            Dino, the founder and chief storyteller behind this blog, believes in the magic of storytelling to inspire, entertain, and educate. 
            With a passion for writing and a curious mind, Dino embarked on this journey to share captivating stories, insightful reflections, and valuable knowledge with the world.
          </Typography>
          <Typography paragraph style={{ color: '#555555', marginBottom: 20 }}>
            At Dino's Amazing Blog, you'll find a diverse range of topics, from travel adventures to personal development insights, from book reviews to tech trends, 
            all crafted with care and creativity to engage and delight our readers.
          </Typography>
          <Typography paragraph style={{ color: '#555555', marginBottom: 20 }}>
            Join us on this exciting adventure as we explore the wonders of life, one story at a time. Thank you for being a part of our community!
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#777777', marginTop: '2rem' }}>
            &copy; 2024 Dino's Amazing Blog. All rights reserved.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default About;
