import forumoneEs5 from '@forumone/eslint-config-es5';
import globals from 'globals';

export default [
  ...forumoneEs5,
  {
    // allow require(), since this is still CommonJS
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];
