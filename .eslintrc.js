module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  // plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'no-console': 0,
    'no-alert': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  settings: {
    // 'import/resolver': {
    node: {
      extensions: ['.js', '.jsx'],
      moduleDirectory: ['node_modules', 'src/'],
    },
  },
  react: {
    version: 'detect',
  },
  // },
};
