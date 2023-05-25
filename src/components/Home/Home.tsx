import React from 'react';

import { styled } from '@mui/system';
import { Button } from '@mui/material';

import { NavBar } from '../Navbar';

interface Props {
    title: string;
};

const Root = styled("div")({
    padding: 0,
    margin: 0
});

const NavbarContainer = styled("div")({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
});

const LogoA = styled('a')({
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
});

const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
});

const NavA = styled('a')({
    display: 'block',
    padding: '1em',
    color: 'black'
});

const Main = styled('main')( {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
});

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
});

export const Home = (props:Props) => {
    return (
        <Root>
            <NavBar />
        </Root>
    )
};