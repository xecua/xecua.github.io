import React from 'react';
import { Typography, makeStyles, Box } from '@material-ui/core';
import '@/utils/extensions';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBlockStart: theme.spacing(2).addPxUnit(),
    marginInlineStart: theme.spacing(2).addPxUnit(),
  },
  box: {
    marginBlockStart: theme.spacing(2).addPxUnit(),
    marginBlockEnd: theme.spacing(2).addPxUnit(),
  },
  '@global': {
    '.MuiTypography-body1': {
      marginInlineStart: theme.spacing(2).addPxUnit(),
    },
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <Typography variant="h4" component="h2" gutterBottom>
          Bio
        </Typography>
        <Typography variant="body1" gutterBottom>
          HN: xecua/caffein
          <br />
          連絡はGmailまで。 ユーザ名: courser4848
        </Typography>
        <Typography variant="body1" gutterBottom>
          都内で大学生をしています
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
