import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>Welcome to My Blog</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>Content 1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>Content 2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>Content 3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
