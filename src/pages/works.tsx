import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import * as utils from '@/utils';

type WorkItem = {
  title: string;
  href?: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    title: 'Arcaeaのやつ',
    href: 'https://scoretool.caffeine.page',
    description: `Typescript(React/Material UI)/Firebase
    スコアツールです
    APIが公開されてないのでスコアは手打ちしてね`,
  },
];

const WorkItemComponent = (props: WorkItem) => {
  return (
    <>
      <Box sx={{ marginBlockStart: 2 }}>
        <Typography variant="h6">
          {typeof props.href !== 'undefined' ? (
            <Link href={props.href}>{props.title}</Link>
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
};

const Works: React.FC = () => {
  return (
    <Box sx={{ marginBlockStart: 2 }}>
      {workItems.map((item, i) => (
        <WorkItemComponent key={i} {...item} />
      ))}
    </Box>
  );
};

export default Works;
