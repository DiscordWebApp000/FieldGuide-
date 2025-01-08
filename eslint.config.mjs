import js from '@eslint/js';
import compat from '@eslint/eslintrc';

export default [
  js.configs.recommended,
  ...compat.config({
    root: true,
    baseDirectory: __dirname,
    extends: [
      'next/core-web-vitals'
    ]
  })
];
