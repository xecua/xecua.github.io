---
title: 自分用チートシート
layout: ../layouts/Markdown.astro
---

# 自分用チートシート

あると便利そうなのでインストールしても、アレなんだったっけ……となったりそもそも存在を忘れていたりして思い出せないことがあったりするのでメモする場所。

あとでよく使ってるやつも書くかも

## GUI

### Amethyst

https://ianyh.com/amethyst/

macOSのタイル型ウィンドウマネージャ。
yabaiと違ってSIPの無効化がいらないし、modが固定なので諦めがつく。option+shiftはちょっと押し辛い。

## 仮想環境など

### pipx/uvx

https://pipx.pypa.io/stable/

PyPIに公開されているコマンドラインアプリケーションを(独立した環境に)インストールすることができるアプリ。

uvxでもいいかも
毎回uvxしたくないなら`uv tool install`でいける
https://docs.astral.sh/uv/guides/tools

### volta

https://volta.sh

nodeのバージョン切り替えるやつ。最近ggるとこれがよく出る気がする

## ツール

### iconv

エンコード変換するやつ。
https://github.com/mtgto/macSKK/issues/160 で「nkfは流石に古くて正しく動かなくても仕方ない」と言っていたのでこっちを使っていきたい。

余談。
+ macOSに標準搭載されているiconvはこれまた古い。`brew`などでの最新版のインストールを推奨(これも↑のissueで言ってた)。
+ POSIX標準なだけで様々な実装が存在し得る。とはいえGNUのやつ(libiconv)がデファクトスタンダードっぽさ。

### lnav

https://lnav.org

なんかログがみやすくなるらしい。まだ使ったことはない。

## Vim

### google/vimdoc

https://github.com/google/vimdoc

vimdocのテンプレを生成してくれるやつ
