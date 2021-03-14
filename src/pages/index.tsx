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
  Icon,
} from '@material-ui/core';
import '@/utils/extensions';
import { Edit, GitHub, Mail, Twitter } from '@material-ui/icons';
import Works from './works';

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
  indent1: {
    marginInlineStart: theme.spacing(2).addPxUnit(),
  },
  indent2: {
    marginInlineStart: theme.spacing(4).addPxUnit(),
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
              href="https://blog.koffein.dev/">
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
      <Grid item xs={12}>
        <Typography gutterBottom>
          HNはxecua。読みは適当に。 大学生(専攻: CS/研究分野: SE)です。
          これといった目的もなく生きているのでそのときにやりたいことをやっています
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          趣味
        </Typography>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body1" className={classes.indent1}>
              ゲーム
            </Typography>
            <Typography variant="body2" paragraph className={classes.indent2}>
              主に音楽ゲーム(↓がメイン)とアクション
              <List dense>
                <ListItem>
                  <ListItemText primary="SOUND VOLTEX(SV-1322-4960)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="オンゲキ" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Arcaea(660416079)" />
                </ListItem>
              </List>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.indent1}>
              PCいじり
            </Typography>
            <Typography variant="body2" paragraph className={classes.indent2}>
              主にTwitterのような気もする たまにプをします
            </Typography>
            <Typography variant="body2" paragraph className={classes.indent2}>
              Skills
              <List dense>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <b>Python</b>{' '}
                        <Icon fontSize="inherit" className="fab fa-python" />
                      </>
                    }
                    secondary="MLではなく汎用計算機として。あとはDjangoとか"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <b>Rust</b>{' '}
                        <Icon fontSize="inherit" className="fab fa-rust" />
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <b>JavaScript/TypeScript</b>{' '}
                        <Icon fontSize="inherit" className="fab fa-js" />
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <b>Unix shell</b>{' '}
                        <Icon fontSize="inherit" className="fas fa-terminal" />
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="きょっぷろも少々(あっとこ緑)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="基本情報処理技術者試験" />
                </ListItem>
              </List>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          その他リンク
        </Typography>
        <Typography paragraph className={classes.indent1}>
          <Link href="/key.asc">GnuPGの鍵</Link> <br />
          特に意味はありません インポートしてもいいのよ
        </Typography>
        <Typography paragraph className={classes.indent1}>
          <Link href="https://pawoo.net/@xecua">Pawoo</Link> <br />
          Twitterが死んだ時のための冗長性です
        </Typography>
        <Typography paragraph className={classes.indent1}>
          <Link href="https://trap.jp/author/xecua">traP Blog</Link> <br />
          所属しているサークルの枠で書いたやつ
          黒歴史的なやつもあるけど人生自体黒歴史なので気にしないことにします
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">つくったもの</Typography>
        <Works />
      </Grid>
    </Grid>
  );
};

export default Index;
