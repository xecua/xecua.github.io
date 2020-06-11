import React from 'react';
import { AppBar, makeStyles, Toolbar, createStyles, Typography, IconButton } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import NextLink from 'next/link';

const useStyles = makeStyles(theme => createStyles({
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(1)
  },
  menuItem: {
    flexGrow: 1,
    marginRight: theme.spacing(1)
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <NextLink href="/"><Typography className={classes.title} variant="h6" component="h1">ぽ</Typography></NextLink>
          {/* <NextLink href="/links"><Typography className={classes.menuItem}>りんく</Typography></NextLink> */}
          <IconButton href="https://github.com/xecua"><GitHub /></IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Placeholder */}
    </>
  );
};

export default Header;