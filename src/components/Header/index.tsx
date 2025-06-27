'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';


const pages = ['Pastry', 'Breakfast','Favourites'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{
        backgroundColor: "#832232"
    }}  position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CoffeeRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                flexGrow:1,
                justifyContent:"flex-start",
                display: { xs: 'none', md: 'flex' },
                fontFamily: "Almendra" , 
                fontWeight: "bold",
                fontSize: "2rem",
                fontStyle:"italic",
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',

            }}
          >
            PR Coffee
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' },
              }}

            >
              {pages.map((page) => (
                <MenuItem key={page} component="a" href={`/${page.toLowerCase()}`} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CoffeeRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
                textAlign:{xs : 'center'},
              flexGrow: 1,
              fontFamily: "Almendra" , 
                fontWeight: "bold",
                fontSize: "2rem",
                fontStyle:"italic",
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PR Coffee
          </Typography>
          <Box sx={{  justifyContent: "end" , display: { xs: 'none', md: 'flex' } 
       }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component = "a"
                href={`/${page.toLowerCase()}`}
                sx={{ my: 2, 
                    color: 'white', 
                    display: 'block' ,
                    fontSize:"1.2rem",
                    fontWeight:700,
                    textDecoration:"underline"
                }}
                
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
