import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        py: { xs: 0.5, md: 2 },
        bgcolor: 'black',
        color: 'primary.contrastText',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <img src="../../logo.png" alt="Logo" style={{ height: '40px' }} />
              <Link to="/">
              <Typography variant="h6" component="div" sx={{ ml: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
  Diexperts1
</Typography>
</Link>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Box display="flex">
            <Link to="/about">
  <Typography variant="body1" sx={{ mr: 2 }}>About US</Typography>
</Link>
<Link to="/past-projects">
  <Typography variant="body1" sx={{ mr: 2 }}>
    Past Projects
  </Typography>
</Link>
<Link to="/machinery">
  <Typography variant="body1" sx={{ mr: 2 }}>Services</Typography>
</Link>
<Link to="/contact">
  <Typography variant="body1">Contact US</Typography>
</Link>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} style={{ width: '100%', justifyContent: 'flex-end' }}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Box p={2}>
          <Link to="/about">
  <Typography variant="body1" sx={{ mr: 2 }}>About</Typography>
</Link>
          
<Link to="/past-projects">
  <Typography variant="body1" sx={{ mr: 2 }}>
    Past Projects
  </Typography>
</Link>
<Link to="/machinery">
  <Typography variant="body1">Services</Typography>
</Link>
<Link to="/contact">
  <Typography variant="body1">Contact US</Typography>
</Link>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export { NavBar };
