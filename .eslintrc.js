module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint.js')],

  globals: {},

  rules: {
    /* js */
    // 缩进为2
    indent: ['error', 2],
    // 只够使用单引号
    quotes: ['error', 'single'],

    'no-console': 'off',
    // 使用分号
    semi: ['error', 'always'],

    'import/no-unresolved': 'off',
    // ts

    // react
  },
};
