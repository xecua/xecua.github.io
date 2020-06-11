import React from 'react';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';
import { Typography, Box, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(2),
  },
  string: {
    marginLeft: theme.spacing(2),
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <Header />
      <Box className={classes.box} component="div">
        <Typography className={classes.string}>
          <Link href="https://xecua.hatenablog.com/" color="inherit">
            ブログ
          </Link>
        </Typography>
      </Box>
      <hr />
      <Box className={classes.box}>
        <Typography className={classes.string}>改修中..</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Index;
