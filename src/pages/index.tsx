import AccountCard, { AccountCardProps } from '@/components/AccountCard';
import DiscordIcon from '@/components/icons/DiscordIcon';
// import AniListIcon from '@/components/icons/AniListIcon';
import MastodonIcon from '@/components/icons/MastodonIcon';
import NostrGuruIcon from '@/components/icons/NostrGuruIcon';
import { Edit, GitHub, Mail, Twitter } from '@mui/icons-material';
import { Avatar, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// import Grid from '@mui/material/Unstable_Grid2';

const accounts: AccountCardProps[] = [
  {
    href: 'https://github.com/xecua',
    IconComponent: GitHub,
    accountName: '@xecua',
  },
  {
    href: 'https://twitter.com/xecual',
    IconComponent: Twitter,
    accountName: '@xecual',
  },
  {
    IconComponent: Mail,
    accountName: 'contact①caffeine②page',
  },
  {
    href: 'https://xecua.hatenablog.com',
    IconComponent: Edit,
    accountName: 'ぶろぐ',
  },
  {
    IconComponent: MastodonIcon,
    accountName: '@xecua@mstdn.jp',
    linkProps: { rel: 'me' },
    href: 'https://mstdn.jp/@xecua',
  },
  {
    href: 'https://discord.com/users/333637329006886932',
    IconComponent: DiscordIcon,
    accountName: 'xecua#8801',
  },
  {
    href: 'https://nostr.directory/p/xecual',
    IconComponent: NostrGuruIcon, // この使い方微妙かもしれん
    accountName: 'nostr (directory)',
  },

  // {
  //   IconComponent: AniListIcon,
  //   accountName: '@xecua',
  //   href: 'https://anilist.co/user/xecua',
  // },
];

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
        <Grid item xs={4} md={2}>
          <Avatar
            src="/icon.png"
            alt="icon"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid
          item
          xs
          container
          alignContent="start"
          direction={{ xs: 'row', md: 'column' }}>
          {accounts.map((account) => (
            <Grid item xs={12} md={3} key={account.href ?? account.accountName}>
              <AccountCard {...account} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom>
          メアドは①を<code>@</code>に、②を<code>.</code>にしてください。
          <br />
          PGPで暗号化したかったら公開鍵を<Link href="/key.asc">/key.asc</Link>
          とか
          <Link href="https://keys.openpgp.org">keys.openpgp.org</Link>
          に置いてるので使ってください。
          <br />
          自分から送る時は Proton Mail
          使ってるせいでバイナリ状態で届くと思います。
        </Typography>
        <Typography gutterBottom>
          HNはxecua。読みは適当に(推奨はローマ字打ちを無理矢理読んで「えくあ」)。
          あと機械翻訳由来の「かふぇ」とかも使います
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
              プ
            </Typography>
            <Typography variant="body2" paragraph sx={{ marginInlineStart: 4 }}>
              たまに。Python, Rust, TypeScript(React)あたりを使います
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          所持資格
        </Typography>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              基本情報処理技術者試験
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              第1級アマチュア無線技師
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              普通自動車運転免許
            </Typography>
            <Typography variant="body2" paragraph sx={{ marginInlineStart: 4 }}>
              MT車の運転するの好きです(免許取ってからは1回しかしてないけど)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          雑多なぷろふぃーる
        </Typography>
        <Grid container direction="column">
          <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
            すきなたべもの🍛: カレー
          </Typography>
          <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
            すきなおかし🍫: チョコレート
            (いちご・バナナ以外のくだものと一緒になっている場合を除く)
          </Typography>
          {/*
          <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
            すきな音楽ジャンル🕺: ハピコア
          </Typography>
          */}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="subtitle1">
          リンクの類
        </Typography>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              <a href="https://diary.caffeine.page">にっき</a>
            </Typography>
            <Typography variant="body2" paragraph sx={{ marginInlineStart: 4 }}>
              ほぼ中身がない日記です
              Rust製の自作ジェネレータでMarkdownから生成しています
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              <a href="https://trap.jp/author/xecua">traP Blog</a>
            </Typography>
            <Typography variant="body2" paragraph sx={{ marginInlineStart: 4 }}>
              所属しているサークルの枠で書いたやつ
              黒歴史的なやつもあるけど人生自体黒歴史なので気にしないことにします
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph sx={{ marginInlineStart: 2 }}>
              <a href="https://www.amazon.jp/hz/wishlist/ls/1IO2VY7TGVLJM?ref_=wl_share">
                芋🥔
              </a>
            </Typography>
            <Typography variant="body2" paragraph sx={{ marginInlineStart: 4 }}>
              これ届くことあるんかな
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
