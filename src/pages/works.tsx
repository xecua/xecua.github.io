import React from 'react';
import { makeStyles, Box, Typography, Link } from '@material-ui/core';
import * as utils from '@/utils';
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
  spacer: {
    marginBlockEnd: theme.spacing(2).addPxUnit(),
  },
  '@global': {
    '.MuiTypography-body1': {
      marginInlineStart: theme.spacing(2).addPxUnit(),
    },
  },
}));

type WorkItem = {
  repoName: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    repoName: 'git',
    description: 'gitを完全に理解するために再実装するやつ',
  },
  {
    repoName: 'yojo',
    description: '@trapyojoの名言を集めるやつ(動かす鯖がないため凍結中)',
  },
  {
    repoName: 'mini-py',
    description: `Pythonサブセットのインタプリタ
      コンパイラはCのサブセットのものを授業で作ったが、インタプリタは作ったことがなかったためやってみた`,
  },
  {
    repoName: 'traQbot',
    description: `traQで動いてたArcaeaのbot
      V3でいろいろ変わったのと機能が貧弱すぎたため更新を中断
      いろいろ機能を入れてTwitterBotとして復活させたいような気がする`,
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
          {props.repoName}(
          <Link
            href={`https://github.com/xecua/${props.repoName}`}
            color="secondary">
            {`https://github.com/xecua/${props.repoName}`}
          </Link>
          )
        </Typography>
      </Box>
      <Typography variant="body1">
        {utils.breakText(props.description)}
      </Typography>
    </>
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <Typography variant="body2">
          特にないので
          <Link
            href="https://github.com/xecua?tab=repositories"
            color="inherit"
            underline="always">
            GitHubのリポジトリ
          </Link>
          の説明でも
        </Typography>
      </Box>
      {workItems.map(WorkItemComponent)}
    </Box>
  );
};

export default Works;
