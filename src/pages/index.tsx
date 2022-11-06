import React from 'react';
import {
  Typography,
  Grid,
  Avatar,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@mui/material';
import { Edit, GitHub, Mail, Twitter } from '@mui/icons-material';

const Index: React.FC = () => {
  return (
    <Grid
      sx={{
        marginBlockStart: 2,
      }}
      container
      spacing={4}
      justifyContent="space-evenly"
      alignItems="flex-start">
      <Grid item container xs={12} spacing={4}>
        <Grid item xs={8} sm={4} md={2}>
          <Avatar
            src="/icon.png"
            alt="icon"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid xs item>
          <List
            sx={{
              width: '100%',
              maxWidth: '20em',
            }}>
            <ListItem
              component={Link}
              color="inherit"
              href="https://github.com/xecua">
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText
                sx={{ textDecoration: 'underline' }}
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
                sx={{ textDecoration: 'underline' }}
                color="inherit"
                primary="@xecual"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="contact①caffeine②page" />
            </ListItem>
            <ListItem
              component={Link}
              color="inherit"
              href="https://xecua.hatenablog.com">
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText
                sx={{ textDecoration: 'underline' }}
                color="inherit"
                primary="ぶろぐ"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom>
          メアドは①を<code>@</code>に、②を<code>.</code>にしてください。
          <br />
          PGP対応しています。公開鍵は<Link href="/key.asc">/key.asc</Link>とか<Link href="https://keys.openpgp.org">keys.openpgp.org</Link>に置いてます
        </Typography>
        <Typography gutterBottom>
          HNはxecua。読みは適当に(推奨はローマ字打ち「ぇくあ」、1文字目が読めないので「えくあ」で)。
          <br />
          大学院でソフトウェア工学的なやつをやっています。 <br />
          これといった目的もなく生きているのでそのときにやりたいことをやっています
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          趣味
        </Typography>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              ゲーム
            </Typography>
            <Typography variant="body2" paragraph sx={{ marginInlineStart: 4 }}>
              最近は専ら音楽ゲーム(SDVX(SV-1322-4960)、Arcaea(660416079)など)。あとははらがみ(807301671)とか
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              PCいじり
            </Typography>
            <Typography variant="body2" paragraph sx={{ marginInlineStart: 4 }}>
              主にTwitterのような気もする たまにプをします
            </Typography>
            <Typography variant="body2" sx={{ marginInlineStart: 4 }}>
              Skills
            </Typography>
            <List dense sx={{ marginInlineStart: 4 }}>
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      <b>Python</b>
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
                      <b>Rust</b>
                      <Icon fontSize="inherit" className="fab fa-rust" />
                    </>
                  }
                  secondary="習熟度はそんなに高くないけどすき"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      <b>JavaScript/TypeScript</b>
                      <Icon fontSize="inherit" className="fab fa-js" />
                    </>
                  }
                  secondary="脳死Reactマン"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      <b>Unix shell</b>
                      <Icon fontSize="inherit" className="fas fa-terminal" />
                    </>
                  }
                  secondary="(黒い画面恐怖症ではないという程度の意味です)"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="きょっぷろも少々(あっとこ緑)" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          所持資格: 基本情報処理技術者試験 / 第1級アマチュア無線技師 /
          普通自動車運転免許
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          その他リンク
        </Typography>
        <Typography paragraph sx={{ marginInlineStart: 1 }}>
          <Link href="https://pawoo.net/@xecua">Pawoo</Link> /{' '}
          <Link href="https://mstdn.jp/@xecua">mstdn.jp</Link>
          <br />
          Twitterが死んだ時のための冗長性です
        </Typography>
        <Typography paragraph sx={{ marginInlineStart: 1 }}>
          <Link href="https://trap.jp/author/xecua">traP Blog</Link> <br />
          所属しているサークルの枠で書いたやつ
          黒歴史的なやつもあるけど人生自体黒歴史なので気にしないことにします
        </Typography>
        <Typography paragraph sx={{ marginInlineStart: 1 }}>
          <Link href="https://www.amazon.jp/hz/wishlist/ls/1IO2VY7TGVLJM?ref_=wl_share">
            芋🥔
          </Link>
          <br />
          これ届くことあるんかな
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Index;
