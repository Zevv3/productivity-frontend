import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { styled } from '@mui/system';
import { Button, Toolbar, Typography, Menu, AppBar, Container, Box, IconButton, MenuItem, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material';
import { getAuth, signOut } from "firebase/auth";


const NavBarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
});

const LogoA = styled(Link)({
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
});

const CoreNav = styled('h1')({
    listStyle: 'none',
    textTransofrm: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
});

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
});

export const NavBar = () => {
    // const auth = getAuth();
    // const myAuth = localStorage.getItem('auth');

    const navigate = useNavigate();

    let links = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        // {
        //     // We don't have this yet
        //     text: 'Search',
        //     onClick: () => navigate('/search')
        // },
        {
            text: 'Sign In',
            onClick: () => navigate('/signin')
        },
        {
            text: 'Sign Up',
            onClick: () => navigate('/signup')
        },
    ];

    let authLinks = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        // {
        //     // We don't have this yet
        //     text: 'Search',
        //     onClick: () => navigate('/search')
        // },
        // {
            // I don't think i'll use this, I think this will just be on the home page, we'll see
        //     text: 'Planner',
        //     onClick: () => navigate('/')
        // },
        {
            text: 'Profile',
            onClick: () => navigate('/profile')
        },
        {
            text: 'Sign Out',
            // onClick: () => {
            //     signUsOut();
            // }
        }
    ];

    // if (myAuth === "true") {
    //     links = authLinks
    // };

    const [navLinks, setNavLinks] = useState(links);

    // const signUsOut = async () => {
    //     await signOut(auth);
    //     localStorage.setItem('auth', 'false');
    //     localStorage.setItem('token', '');
    //     setNavLinks(links);
    //     navigate('/');
    //     window.location.reload();
    // };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
      );
      const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    return (
        <AppBar position='fixed'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <LibraryMusicIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography 
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        Daily Planner
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'moon' }}}>
                        <IconButton
                        size='large'
                        aria-label='current user account'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleOpenNavMenu}
                        color='inherit'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' }}}
                    >
                        {navLinks.map((item, index) => (
                            <MenuItem key={index} onClick={item.onClick}>
                            <Typography textAlign="right" color='black'>{item.text}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    </Box>

                    <LibraryMusicIcon fontSize='large' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant='h4'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        Daily Planner
                    </Typography>
                    <Box sx={{ position: 'absolute', flexGrow: 1, display: { xs: 'none', md: 'flex' }, right: '0px' }}>
                        {navLinks.map((item, index) => (
                            <Button key={index} onClick={item.onClick} sx={{ color: 'white', display: 'block' }}>{item.text}</Button>
                        ))}
                    </Box>
                    <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={1}>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )

}