module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    'react/jsx-curly-spacing': 0,
    'array-bracket-spacing': 0,
    'template-curly-spacing': 0,
    'computed-property-spacing': 0,
    'space-in-parens': 0,
    'space-before-function-paren': 0,
    'no-trailing-spaces': [ 'error', { ignoreComments: true, skipBlankLines: true } ],
    'padded-blocks': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
