import globals from 'globals';

import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import ts from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-var': 2,
    },
  },
  prettier,
];
