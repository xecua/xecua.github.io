import { Box, Typography, Link, Stack } from '@mui/material';
import * as utils from '@/utils';

type WorkItem = {
  title: string;
  href?: string;
  description: string;
};

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

const created: WorkItem[] = [
  {
    title: 'Arcaeaのやつ',
    href: 'https://scoretool.caffeine.page',
    description: `Typescript(React/Material UI)/Firebase
    合法スコアツールです(たぶんそのうち共有機能的なのをつける)
    APIが公開されてないのでスコアは手打ちしてね`,
  },
];

const written: WorkItem[] = [
  {
    title: '「細粒度履歴追跡のための増分的なリポジトリ変換ツールの設計と実装」',
    href: 'http://jssst.or.jp/files/user/taikai/2021/papers/37-L.pdf',
    description: '(日本ソフトウェア科学会第38回大会講演論文集)',
  },
  {
    title:
      '「リポジトリマイニング手法に対する前処理としての履歴書き換えツールの試作」',
    href: 'https://ken.ieice.org/ken/paper/20220729XCLo/',
    description:
      '(電子情報通信学会 ソフトウェアサイエンス研究会 7月研究会 / 信学技報)',
  },
];

const Works: React.FC = () => {
  return (
    <Stack spacing={4} sx={{ marginBlockStart: 2 }}>
      <Box>
        <Typography variant="h5" fontWeight={700}>
          つくったもの
        </Typography>
        {created.map((item, i) => (
          <WorkItemComponent key={i} {...item} />
        ))}
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={700}>
          かいたもの
        </Typography>
        {written.map((item, i) => (
          <WorkItemComponent key={i} {...item} />
        ))}
      </Box>
    </Stack>
  );
};

export default Works;
