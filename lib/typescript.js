require('@rushstack/eslint-patch/modern-module-resolution')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['./base.js', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // 关闭 不允许未使用的变量
    '@typescript-eslint/no-explicit-any': 'off', // 关闭 禁止使用 any 类型
    '@typescript-eslint/no-inferrable-types': 'off', // 关闭 禁止对初始化为number、string 或 boolean 的 变量 或 形参 进行显式类型声明
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 导出 函数 和 类的公共类方法 上要求显式的 返回 和 参数类型
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/no-empty-function': 'off', // 不允许空函数
    '@typescript-eslint/no-non-null-assertion': 'off' // 禁用使用!后缀运算符
  }
})
