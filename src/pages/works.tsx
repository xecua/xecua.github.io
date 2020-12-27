import React from 'react';
import { makeStyles, Box, Typography, Link } from '@material-ui/core';
import * as utils from '@/utils';
import '@/utils/extensions';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBlockStart: theme.spacing(2).addPxUnit(),
    // marginInlineStart: theme.spacing(2).addPxUnit(),
  },
  box: {
    marginBlockStart: theme.spacing(2).addPxUnit(),
    // marginInlineStart: theme.spacing(2).addPxUnit(),
  },
  spacer: {
    marginBlockEnd: theme.spacing(2).addPxUnit(),
  },
  // '@global': {
  //   '.MuiTypography-body1': {
  //     marginInlineStart: theme.spacing(2).addPxUnit(),
  //   },
  // },
}));

type WorkItem = {
  title: string;
  href?: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    title: 'Arcaeaのやつ',
    href: 'https://scoretool.koffein.dev',
    description: `Typescript(React/Material UI)/Firebase
    スコアツールです
    APIが公開されてないのでスコアは手打ちしてね`,
  },
];

const Works: React.FC = () => {
  const classes = useStyles();
  const WorkItemComponent = <T extends string | number | symbol>(
    props: WorkItem
  ) => (
    <>
      <Box className={classes.box}>
        <Typography variant="h6">
          {typeof props.href !== 'undefined' ? (
            <Link href={props.href} color="secondary">
              {props.title}
            </Link>
          ) : (
            props.title
          )}
        </Typography>
      </Box>
      <Typography variant="body1">
        {utils.breakText(props.description)}
      </Typography>
    </>
  );

  return <Box className={classes.root}>{workItems.map(WorkItemComponent)}</Box>;
};

export default Works;
