import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  createStyles,
  Typography,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  Divider,
  SvgIconTypeMap,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  GitHub,
  Twitter,
  Menu as MenuIcon,
  Person,
  Folder,
} from '@material-ui/icons';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  OverridableComponent,
  OverridableTypeMap,
} from '@material-ui/core/OverridableComponent';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      marginBlockStart: theme.spacing(2),
    },
    drawer: {
      inlineSize: drawerWidth,
    },
    drawerPaper: {
      inlineSize: drawerWidth,
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    menuItemWrapper: {
      position: 'relative',
      display: 'inline-block',
      marginRight: theme.spacing(2),
      boxSizing: 'content-box',
    },
    menuItem: {
      boxSizing: 'content-box',
      '&::after': {
        position: 'absolute',
        display: 'block',
        content: '""',
        inlineSize: '100%',
        blockSize: '2px',
        background: theme.palette.text.primary,
      },
    },
    menuItemNotSelected: {
      '&::after': {
        transitionProperty: 'transform',
        transitionDuration: '.5s',
        transform: 'scaleX(0)',
        transformOrigin: 'center bottom',
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
      },
    },
    spacer: {
      flexGrow: 1,
    },
  })
);

type Menu<T extends OverridableTypeMap> = {
  icon: OverridableComponent<T>;
  link: string;
  label: string;
};

const Header: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const menuItems: Menu<SvgIconTypeMap<Record<string, unknown>, 'svg'>>[] = [
    { icon: Person, link: '/', label: 'プロフィール' },
    { icon: Folder, link: '/works', label: 'つくったもの' },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
            {menuItems.map((item, i) => (
              <NextLink href={item.link} key={i} passHref>
                <span className={classes.menuItemWrapper}>
                  <Typography
                    component="div"
                    className={clsx(
                      classes.menuItem,
                      router.pathname !== item.link
                        ? classes.menuItemNotSelected
                        : ''
                    )}>
                    {item.label}
                  </Typography>
                </span>
              </NextLink>
            ))}
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
          onClose={toggleDrawer}
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{
            keepMounted: true,
          }}>
          <Toolbar />
          <Divider />
          <List>
            {menuItems.map((item, i) => (
              <NextLink href={item.link} key={i}>
                <ListItem
                  button
                  onClick={toggleDrawer}
                  selected={router.pathname === item.link}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </NextLink>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Header;
