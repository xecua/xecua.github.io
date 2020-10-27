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
  // SvgIcon,
  // SvgIconProps,
} from '@material-ui/core';
import {
  GitHub,
  Twitter,
  Menu as MenuIcon,
  Person,
  Folder,
  Edit,
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
      cursor: 'default',
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

// const BlogIcon = (props: SvgIconProps) => (
//   <SvgIcon {...props} viewBox="0 0 300 300">
//     <path
//       fill="#333"
//       d="M149.999 248.909c-54.537 0-98.906-44.367-98.906-98.909 0-54.537 44.369-98.909 98.906-98.909 54.545 0 98.908 44.372 98.908 98.909 0 54.542-44.363 98.909-98.908 98.909zm0-185.238c-47.601 0-86.33 38.723-86.33 86.329 0 47.605 38.729 86.332 86.33 86.332 47.61 0 86.338-38.727 86.338-86.332 0-47.606-38.728-86.329-86.338-86.329zM161.52 101.16c-4.832-9.785-7.783-19.3-9.273-24.845v70.055c2.447.917 4.197 3.257 4.197 6.021 0 3.559-2.887 6.442-6.443 6.442-3.56 0-6.443-2.885-6.443-6.442 0-2.896 1.925-5.317 4.558-6.131v-70.019c-1.485 5.531-4.438 15.092-9.293 24.919-7.571 15.314-17.009 28.823-17.009 28.823l6.036 82.598s5.736 6.401 22.31 6.41h.023c16.573-.009 22.312-6.41 22.312-6.41l6.035-82.598c-.003 0-9.441-13.508-17.01-28.823z"
//     />
//   </SvgIcon>
// );

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
                    variant="button"
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
