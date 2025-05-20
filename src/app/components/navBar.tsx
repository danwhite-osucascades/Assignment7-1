'use client'

import Link from "next/link"

import { AppBar, Toolbar, Typography,  Container } from '@mui/material'

export default function NavBar() {

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Link href="/" style={{color: "#fff", textDecoration: 'none'}}>
            <Typography
                variant="h6"
                noWrap
                sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                
                }}
            >
                HOME
            </Typography>
          </Link>
            <Link href="/favorites" style={{color: "#fff", textDecoration: 'none'}}>
            <Typography
                variant="h6"
                noWrap
                sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                }}
            >
                FAVORITES
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
