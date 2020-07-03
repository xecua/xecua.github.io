import React from 'react';
import { Typography, Link, makeStyles, Button, Grid } from '@material-ui/core';
import { GitHub, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  textTransformNone: {
    textTransform: 'none',
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.box}>
        <Grid item>
          <Typography variant="h4" component="h2">
            xecua
          </Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item>
            <Button
              className={classes.textTransformNone}
              variant="contained"
              href="https://github.com/xecua"
              startIcon={<GitHub />}>
              GitHub: xecua
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.textTransformNone}
              variant="contained"
              href="https://twitter.com/xecual"
              startIcon={<Twitter />}>
              Twitter: @xecual
            </Button>
          </Grid>
          <Grid item>
            <Button href="https://xecua.hatenablog.com/" variant="outlined">
              ブログ
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
