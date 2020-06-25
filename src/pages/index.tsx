import React from 'react';
import { Typography, Box, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box} component="div">
        <Typography>
          →
          <Link href="https://xecua.hatenablog.com/" color="inherit">
            ブログ
          </Link>
          ←
        </Typography>
      </Box>
      <hr />
      <Box className={classes.box}>
        <Typography>改修中..</Typography>
      </Box>
    </>
  );
};

export default Index;
