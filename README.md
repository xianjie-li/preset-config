config for lixianjie, includes babel, eslint, prettier, editor, etc

`.eslintrc.js`
```js
module.exports = {
  extends: [require.resolve('@lxjx/preset-config/.eslintrc.js')],

  globals: {},

  rules: {
    // 缩进为2
    'import/no-unresolved': 'off',
  },
};

```


`.prettierrc.js`

```js
const prettier = require('@lxjx/preset-config/.prettierrc.js');

module.exports = {
  ...prettier,
};

```

- [ ] 通过命令来生成配置文件
