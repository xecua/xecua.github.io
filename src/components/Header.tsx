import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  createStyles,
  Typography,
  IconButton,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
} from '@material-ui/core';
import { GitHub, Twitter, Menu as MenuIcon } from '@material-ui/icons';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
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

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
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
          </Hidden>

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
      <Hidden smUp>
        <Drawer
          open={openDrawer}
          aria-label="drawer"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}>
          <Toolbar>
            <Typography>ページ一覧</Typography>
          </Toolbar>
          <List>
            <ListItem button>
              <NextLink href="/">
                <Typography>プロフィール</Typography>
              </NextLink>
            </ListItem>
            <ListItem button>
              <NextLink href="/works">
                <Typography>つくったもの</Typography>
              </NextLink>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Header;
