import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';

const Home = () => {
  return (
    <div style={{ background: "url('https://images.unsplash.com/photo-1600762516498-761775b86af7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Paper elevation={3} style={{ padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10 }}>
          <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: 20 }}>Welcome to My Blog</Typography>
          <Typography variant="body1" style={{ marginBottom: 20 }}>
            I just post some random stuff here. You can read them if you want. I don't care. This is for a project so don't expect anything too fancy. This is just a basic introduction text that I meant to write to fill up the space. I hope you are not reading this because this is just a filler text. I am just writing this to fill up the space. I hope you are not reading this because this is just a filler text. I am just writing this to fill up the space.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
