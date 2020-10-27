import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Avatar,
  Link,
  Button,
} from '@material-ui/core';
import '@/utils/extensions';
import { GitHub, Mail, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBlockStart: theme.spacing(2).addPxUnit(),
  },
  icon: {
    width: '100%',
    height: 'auto',
  },
  textTransformNone: {
    textTransform: 'none',
  },
  '@global': {
    '.MuiButton-label': {
      whiteSpace: 'nowrap'
    }
  }
}));

const Index: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      spacing={4}
      justify="space-evenly"
      alignItems="flex-start">
      <Grid item container xs={12} spacing={4}>
        <Grid item xs={8} sm={4} md={2}>
          <Avatar src="/icon.png" alt="icon" className={classes.icon} />
        </Grid>
        <Grid xs item container direction="column" alignItems="flex-start">
          <Grid item>
            <Button
              href="https://github.com/xecua"
              color="inherit"
              className={classes.textTransformNone}
              startIcon={<GitHub />}>
              @xecua
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://twitter.com/xecual"
              color="inherit"
              className={classes.textTransformNone}
              startIcon={<Twitter />}>
              @xecual
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<Mail />}
              color="inherit"
              className={classes.textTransformNone}>
              Gmail: courser4848
            </Button>
          </Grid>
          <Grid item>
            <Link href="https://xecua.hatenablog.com/" color="inherit">
              ぶろぐ
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={4} direction="column">
        <Grid item>
          <Typography>都内で大学生をしています</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
