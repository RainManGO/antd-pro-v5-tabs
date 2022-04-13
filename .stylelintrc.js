module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-prettier'],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'unit-no-unknown': false,
    'color-hex-case': [
      'lower',
      {
        message: 'Lowercase letters are easier to distinguish from numbers',
      },
    ],
    'max-empty-lines': 2,
    'number-leading-zero': null,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
