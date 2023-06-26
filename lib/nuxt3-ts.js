require('@rushstack/eslint-patch/modern-module-resolution')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['./typescript.js', './vue3.js', '@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended']
})
