module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: 'off',
    'array-bracket-spacing': 'off',
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': 'off'
  }
}
