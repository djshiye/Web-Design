import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Minecraft Architecture Portfolio
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/portfolio">Portfolio</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/projects">Projects</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/testimonials">Testimonials</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/gallery">Gallery</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/contact">Contact</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/testimonials">Testimonials</Button>
            <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
