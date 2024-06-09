import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div className="drawer">
      <List>
        <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/posts" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Posts" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dino's Amazing Blog
        </Typography>
        <Hidden smDown>
          <Button color="inherit" component={Link} to="/" className="nav-link">Home</Button>
          <Button color="inherit" component={Link} to="/about" className="nav-link">About</Button>
          <Button color="inherit" component={Link} to="/posts" className="nav-link">Posts</Button>
          <Button color="inherit" component={Link} to="/contact" className="nav-link">Contact</Button>
        </Hidden>
        <Hidden smUp>
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
