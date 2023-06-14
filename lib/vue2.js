require('@rushstack/eslint-patch/modern-module-resolution')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/max-attributes-per-line': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/component-api-style': [
      'error',
      ['script-setup', 'composition'] // "script-setup", "composition", "composition-vue2", or "options"
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots']
      }
    ],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error', 2],
    'vue/match-component-import-name': ['error'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true
      }
    ],
    'vue/no-undef-properties': [
      'error',
      {
        ignores: ['/^\\$/']
      }
    ],
    'vue/no-unused-refs': ['error'],
    'vue/no-useless-mustaches': ['error'],
    'vue/no-useless-v-bind': ['error'],
    'vue/no-v-text': ['error'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/padding-line-between-tags': ['error'],
    'vue/padding-lines-in-component-definition': ['error'],
    'vue/prefer-separate-static-class': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error'],
    'vue/v-for-delimiter-style': ['error', 'in']
  }
})
