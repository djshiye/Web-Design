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
    <div className="drawer" style={{ backgroundColor: '#37474F', height: '100vh', paddingTop: '64px' }}>
      <List>
        <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Home" style={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="About" style={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/posts" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Posts" style={{ color: '#FFFFFF' }} />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Contact" style={{ color: '#FFFFFF' }} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" className="navbar" style={{ backgroundColor: '#455A64', boxShadow: 'none', borderBottom: '2px solid #FFFFFF' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFFFFF', fontWeight: 'bold', letterSpacing: '1px', fontFamily: 'Roboto, sans-serif' }}>
          Dino's Amazing Blog
        </Typography>
        <Hidden smDown>
          <Button color="inherit" component={Link} to="/" className="nav-link" style={{ color: '#FFFFFF', marginRight: '20px', fontWeight: '500', letterSpacing: '1px' }}>Home</Button>
          <Button color="inherit" component={Link} to="/about" className="nav-link" style={{ color: '#FFFFFF', marginRight: '20px', fontWeight: '500', letterSpacing: '1px' }}>About</Button>
          <Button color="inherit" component={Link} to="/posts" className="nav-link" style={{ color: '#FFFFFF', marginRight: '20px', fontWeight: '500', letterSpacing: '1px' }}>Posts</Button>
          <Button color="inherit" component={Link} to="/contact" className="nav-link" style={{ color: '#FFFFFF', fontWeight: '500', letterSpacing: '1px' }}>Contact</Button>
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
