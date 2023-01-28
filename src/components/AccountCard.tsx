import React from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';

export type AccountCardProps = {
  href?: string;
  linkProps?: JSX.IntrinsicElements['a'];
  IconComponent: SvgIconComponent;
  accountName: string;
};

const AccountCard: React.FC<AccountCardProps> = ({
  IconComponent,
  ...props
}) => {
  return props.href != null ? (
    <a
      href={props.href}
      style={{
        color: 'inherit',
        cursor: 'pointer',
      }}
      {...props.linkProps}>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          paddingX: 2,
          paddingY: 1,
        }}>
        <IconComponent color="action" />
        <Typography sx={{ textDecoration: 'underline' }} color="inherit">
          {props.accountName}
        </Typography>
      </Stack>
    </a>
  ) : (
    <Stack
      direction="row"
      spacing={4}
      sx={{
        paddingX: 2,
        paddingY: 1,
      }}>
      <IconComponent color="action" />
      <Typography color="inherit">{props.accountName}</Typography>
    </Stack>
  );
};

export default AccountCard;
