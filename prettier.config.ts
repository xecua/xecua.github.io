import type { Config } from 'prettier';
import oxcPlugin from '@prettier/plugin-oxc';

const config: Config = {
  plugins: ['prettier-plugin-astro', oxcPlugin],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  singleQuote: true,
  jsxBracketSameLine: true,
};

export default config;

