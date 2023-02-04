import { useContext, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  List,
  SvgIconTypeMap,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  useMediaQuery,
  ListItemButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Person,
  Folder,
  BrightnessMedium,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  OverridableComponent,
  OverridableTypeMap,
} from '@mui/material/OverridableComponent';
import { PrefersDarkModeContext } from './ThemeProvider';

const drawerWidth = 240;

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
  const router = useRouter();

  const prefersDarkModeOriginal = useMediaQuery(
    '(prefers-color-scheme: dark)',
    { noSsr: true }
  );
  const { prefersDarkMode, setPrefersDarkMode } = useContext(
    PrefersDarkModeContext
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const menuItems: Menu<SvgIconTypeMap<Record<string, unknown>, 'svg'>>[] = [
    { icon: Person, link: '/', label: 'プロフィール' },
    { icon: Folder, link: '/works', label: 'Works' },
  ];

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              display: {
                sm: 'none',
              },
            }}
            size="large">
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
            {menuItems.map((item, i) => (
              <NextLink href={item.link} key={i} passHref>
                <Box
                  component="span"
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    marginRight: 2,
                    boxSizing: 'content-box',
                    cursor: 'default',
                    minWidth: '6em',
                    textAlign: 'center',
                  }}>
                  <Typography
                    variant="button"
                    component="div"
                    sx={{
                      boxSizing: 'content-box',
                      '&::after': {
                        position: 'absolute',
                        display: 'block',
                        content: '""',
                        inlineSize: '100%',
                        blockSize: '2px',
                        background: (theme) => theme.palette.background.default,
                        ...(router.pathname !== item.link
                          ? {
                              transitionProperty: 'transform',
                              transitionDuration: '.5s',
                              transform: 'scaleX(0)',
                              transformOrigin: 'center bottom',
                            }
                          : {}),
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                      },
                    }}>
                    {item.label}
                  </Typography>
                </Box>
              </NextLink>
            ))}
          </Hidden>
          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          {prefersDarkModeOriginal ? null : (
            <IconButton onClick={() => setPrefersDarkMode(!prefersDarkMode)}>
              <BrightnessMedium />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <SwipeableDrawer
          open={openDrawer}
          aria-label="drawer"
          anchor="top"
          onOpen={toggleDrawer}
          onClose={toggleDrawer}
          sx={{
            inlineSize: drawerWidth,
          }}
          ModalProps={{
            keepMounted: true,
          }}>
          <Toolbar />
          <List>
            {menuItems.map((item, i) => (
              <NextLink href={item.link} key={i}>
                <ListItemButton
                  onClick={toggleDrawer}
                  selected={router.pathname === item.link}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </NextLink>
            ))}
          </List>
        </SwipeableDrawer>
      </Hidden>
    </>
  );
};

export default Header;
