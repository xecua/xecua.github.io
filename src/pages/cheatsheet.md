---
title: 自分用チートシート
layout: ../layouts/Markdown.astro
---

# 自分用チートシート

あると便利そうなのでインストールしても、アレなんだったっけ……となったりそもそも存在を忘れていたりして思い出せないことがあったりするのでメモする場所。

あとでよく使ってるやつも書くかも

## CLI

### iconv

エンコード変換するやつ。
<https://github.com/mtgto/macSKK/issues/160> で「nkfは流石に古くて正しく動かなくても仕方ない」と言っていたのでこっちを使っていきたい。

余談。

- macOSに標準搭載されているiconvはこれまた古い。`brew`などでの最新版のインストールを推奨(これも↑のissueで言ってた)。
- POSIX標準なだけで様々な実装が存在し得る。とはいえGNUのやつ(libiconv)がデファクトスタンダードっぽさ。

### difit

ローカルの変更をGitHubっぽいUIで確認できるやつ。一応TUIもある
<https://github.com/yoshiko-pg/difit/>

### termshot

ターミナルのイカしたスクショが撮れるやつ
<https://github.com/homeport/termshot>

### dua

ディスクの使用量がわかって消せるやつ
<https://github.com/Byron/dua-cli>

### usql

<https://github.com/xo/usql>

いろんなDBMSに繋げるSQLクライアント (Goなのでdbcliより実行時依存は少なさそう……)

### google/vimdoc

<https://github.com/google/vimdoc>

vimdocのテンプレを生成してくれるやつ

### ebuildtester

<https://wiki.gentoo.org/wiki/Test_environment>

Dockerコンテナ内でebuildのテストをするためのツール

### ni

<https://github.com/antfu-collective/ni>

npmとかyarnとか気にしなくてよくなる人  
fishのabbrで代替実装しようとしたけど、global installとか考慮しようとすると無理っぽかったので素直に使うことにした

### uvx

uv付属のnpx的なやつ mcpでよくお世話になっている  
毎回uvxしたくないなら`uv tool install`でいける  

<https://docs.astral.sh/uv/guides/tools>

### jbang

<https://www.jbang.dev>

Javaのスクリプト実行環境。jshellよりも軽い

### mise

Nodeバージョンマネージャの文脈で知った。voltaよりも使われていそう(Nixが対抗馬として挙げられてる?)  

これ自体は開発ツールマネージャ+タスクランナーなどてんこもりな感じ。  
MakeがPOSIX標準でなければ片っ端から採用したいレベル。  
uvもjbangもこれで入るくらいな感じなので節度を持たないとめちゃくちゃになりそう

<https://mise.jdx.dev>

## TUI

### timg

<https://github.com/hzeller/timg>

ターミナルで画像が表示できるやつ。  
この手のプロトコルはSixel、Kitty Graphics Protocol, iTerm2 Inline Image Protocolなんかがあるけど、この3つには対応しているみたい

GhosttyはSixelには対応する予定がない一方でKitty Graphics Protocolには対応しているので、これで出力させれば見ることができる。  
`-pk`フラグでそうなる。

<https://github.com/ghostty-org/ghostty/discussions/2496#discussioncomment-11727842>

### lnav

<https://lnav.org>

なんかログがみやすくなるらしい。まだ使ったことはない。

## GUI

### Glide

<https://github.com/glide-wm/glide>

Amethystから乗り換え。  
こちらもSIPの無効化は不要(最近のmacOSだとアクセシビリティのどうこうでいけるようになったんかな?)  
こちらはModの指定もできる。  
ちょっと機能的に足りないところもあるけど、Swayに近い機能があるし、アニメーションのおかげでスムーズに感じられるで満足。

## macOS

macOSで表に出てこないけどやっておくべき設定

- 数値を表示するとき、3桁ごとの区切りをなくし、小数点の区切りをピリオドにする

  `defaults write NSGlobalDomain AppleICUNumberSymbols -dict 0 "." 1 "" 10 "." 17 ""`

- .から始まるファイルを常に表示する

  `defaults write com.apple.finder AppleShowAllFiles -bool true`
