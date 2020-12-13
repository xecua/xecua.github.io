import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Avatar,
  Link,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import '@/utils/extensions';
import { Edit, GitHub, Mail, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBlockStart: theme.spacing(2).addPxUnit(),
  },
  icon: {
    width: '100%',
    height: 'auto',
  },
  linkList: {
    width: '100%',
    maxWidth: '20em',
  },
  header: {
    borderBottom: 'solid 2px',
  },
  underLined: {
    textDecoration: 'underline',
  },
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
        <Grid xs item>
          <List className={classes.linkList}>
            <ListItem
              component={Link}
              color="inherit"
              href="https://github.com/xecua">
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText
                className={classes.underLined}
                color="inherit"
                primary="@xecua"
              />
            </ListItem>
            <ListItem
              component={Link}
              color="inherit"
              href="https://twitter.com/xecual">
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemText
                className={classes.underLined}
                color="inherit"
                primary="@xecual"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Gmail: courser4848" />
            </ListItem>
            <ListItem
              component={Link}
              color="inherit"
              href="https://xecua.hatenablog.com/">
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText
                className={classes.underLined}
                color="inherit"
                primary="ぶろぐ"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={4} direction="column">
        <Grid item>
          <Typography gutterBottom>HN: xecua/caffeine</Typography>
          <Typography gutterBottom>
            趣味
            <ul>
              <li>
                ゲーム
                <br />
                音楽ゲームとアクションが好きです
                <br />
                音楽ゲームはACだとSOUND VOLTEX(SV-1322-4960/SKILL
                Lv.11)とかオンゲキ(五段/鉑)、モバイルだとArcaea(660416079/Pot.〜11.5)がメインです
              </li>
              <li>
                PCいじり
                <br />
                プとか。Rustがすきです
              </li>
            </ul>
          </Typography>
          <Typography gutterBottom>
            職業: 大学生(専攻: CS/研究分野: SE)
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>特に目的もなくふらふらしています</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">その他リンク</Typography>
          <Typography gutterBottom>
            <Link href="/key.asc">GnuPGの鍵</Link> <br />
            特に意味はありません インポートしてもいいのよ
          </Typography>
          <Typography gutterBottom>
            <Link href="https://pawoo.net/@xecua">Pawoo</Link> <br />
            Twitterが死んだ時のための冗長性です
          </Typography>
          <Typography gutterBottom>
            <Link href="https://trap.jp/author/xecua">traP Blog</Link> <br />
            所属しているサークルの枠で書いたやつ
            黒歴史的なやつもあるけど人生自体黒歴史なので気にしないことにします
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
