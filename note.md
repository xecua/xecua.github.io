dependenciesに関するメモ

- sharp: astroで使う
  - sharpは特定の条件でpre-built binaryを使わず自前でビルドする(条件不明)。
  - sharpはlibvipsに依存する。システムにlibvipsが存在するとそれを使おうとするが、なんか失敗することがあるみたい。
    - `SHARP_IGNORE_GLOBAL_LIBVIPS=1`をセットすれば付属のlibvipsバイナリを使うので大丈夫っぽい。
