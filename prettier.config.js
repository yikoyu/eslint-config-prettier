module.exports = {
  // 额外的插件
  plugins: [
    // package.json格式化时自动排序
    require.resolve('prettier-plugin-packagejson')
  ],
  // import格式化自动排序时，不删除未使用的import
  organizeImportsSkipDestructiveCodeActions: true,
  // 每行最大字符数量
  printWidth: 120,
  // 结尾分号
  semi: false,
  // 箭头函数，只有一个参数的时候，也不需要括号
  arrowParens: 'avoid',
  // 使用单引号
  singleQuote: true,
  // 结尾不需要逗号
  trailingComma: 'none',
  // 换行符，linux和macos中为'lf'，window中为'crlf'
  endOfLine: 'lf',
  // 每个缩进级别的空格数
  tabWidth: 2,
  // 是否使用制表符缩进
  useTabs: false
}
