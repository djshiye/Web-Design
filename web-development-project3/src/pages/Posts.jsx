import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Posts = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>Blog Posts</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Post 1</Typography>
              <Typography>Content of post 1.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Post 2</Typography>
              <Typography>Content of post 2.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Post 3</Typography>
              <Typography>Content of post 3.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
