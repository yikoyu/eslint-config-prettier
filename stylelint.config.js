module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: require.resolve('postcss-html')
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: require.resolve('postcss-less'),
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-vue',
        'stylelint-config-recess-order',
        'stylelint-config-prettier'
      ]
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: require.resolve('postcss-scss'),
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-recess-order',
        'stylelint-config-prettier'
      ],
      rule: {
        'scss/percent-placeholder-pattern': null
      }
    }
  ],
  rules: {
    'selector-not-notation': null,
    'import-notation': null,
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend'
        ]
      }
    ],
    'no-empty-source': null,
    'string-quotes': null,
    'named-grid-areas-no-invalid': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }]
  },
  ignoreFiles: ['node_modules/*', 'dist/*', '**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
