import React from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  createStyles,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import { GitHub, Twitter } from '@material-ui/icons';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      marginRight: theme.spacing(2),
    },
    menuItem: {
      marginRight: theme.spacing(2),
      borderRightWidth: '5px',
      textWeight: 'bold',
    },
    spacer: {
      flexGrow: 1,
    },
  })
);

// ButtonにLinkを埋め込みたいが情報が古い 特にref周りを理解する必要がありそう(memo)

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          {/* <NextLink href="/"><Typography className={classes.title} variant="h6" component="h1">ぽ</Typography></NextLink> */}
          <NextLink href="/">
            <Button className={classes.menuItem}>
              <Typography>プロフィール</Typography>
            </Button>
          </NextLink>
          <NextLink href="/works">
            <Button className={classes.menuItem}>
              <Typography>つくったもの</Typography>
            </Button>
          </NextLink>
          <div className={classes.spacer} />
          <IconButton href="https://github.com/xecua">
            <GitHub />
          </IconButton>
          <IconButton href="https://twitter.com/xecual">
            <Twitter />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Placeholder */}
    </>
  );
};

export default Header;
