<!--
 * @Date: 2023-06-14 17:59:12
 * @LastEditors: yikoyu 2282373181@qq.com
 * @LastEditTime: 2023-06-14 19:49:02
 * @FilePath: \eslint-config-prettier\README.md
-->
# @yikoyu/eslint-config-prettier

[![version](https://img.shields.io/npm/v/@yikoyu/eslint-config-prettier.svg)](https://www.npmjs.org/package/@yikoyu/eslint-config-prettier)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)
[![semantic-release: vue](https://img.shields.io/badge/semantic--release-vue-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

This package provides [Prettier](https://prettier.io) and [ESLint](https://eslint.org/) settings as an shareable configuration.

## Installation

Install the package with:

```shell
pnpm add eslint stylelint @yikoyu/eslint-config-prettier -D
# or
yarn add eslint stylelint @yikoyu/eslint-config-prettier -D
# or
npm i eslint stylelint @yikoyu/eslint-config-prettier -D
```

Find out and install `peerDependencies`.

```shell
pnpm info "@yikoyu/eslint-config-prettier@latest" peerDependencies
```

## Entry points

- @yikoyu/eslint-config-prettier/base
- @yikoyu/eslint-config-prettier/typescript
- @yikoyu/eslint-config-prettier/vue2
- @yikoyu/eslint-config-prettier/vue3
- @yikoyu/eslint-config-prettier/prettier.config
- @yikoyu/eslint-config-prettier/stylelint.config

## Usage

If you did not already have `.eslint.js` `prettier.config.js` and `stylelint.config.js` configuration files in the root of your project create them.

Add the following to your `.eslint.js`:

```js
// .eslint.js
module.exports = {
  extends: [
    // ... other configs

    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@yikoyu/eslint-config-prettier/base',

    // Using vue3 and typescript config
    '@yikoyu/eslint-config-prettier/typescript',
    '@yikoyu/eslint-config-prettier/vue3',
  ],
};
```

Add the following to your `prettier.config.js`:

```js
// prettier.config.js
module.exports = require('@yikoyu/eslint-config-prettier/prettier.config');
```

Add the following to your `stylelint.config.js`:
```js
// stylelint.config.js
module.exports = require('@yikoyu/eslint-config-prettier/stylelint.config');
```


### NPM script

Add the following script to your `package.json` for easy usage:

```json
"scripts": {
  "lint:css": "stylelint **/*.{css,less,scss,vue}",
  "lint:js": "eslint **/*.{js,ts,tsx,vue}",
  "lint:all": "eslint **/*.{js,ts,tsx,vue} & stylelint **/*.{css,less,scss,vue}",
  "lint:fix": "eslint **/*.{js,ts,tsx,vue} --fix & stylelint **/*.{css,less,scss,vue} --fix",
}
```

### Vite

Install the package with:

```shell
pnpm add vite-plugin-checker -D
```

Add plugin to Vite config file and config the checker you need.

```typescript
// vite.config.ts
import checker from 'vite-plugin-checker'

import { scripts } from './package.json'

export default {
  plugins: [
    checker({
      vueTsc: true,
      eslint: {
        lintCommand: scripts['lint:js']
      },
      stylelint: {
        lintCommand: scripts['lint:css']
      }
    })
  ],
}

```

### VS Code

Install the following plugins in VS Code

```json
// .vscode/extensions.json
{
  "recommendations": [
    "stylelint.vscode-stylelint",
    "dbaeumer.vscode-eslint"
  ]
}
```

Add the following to your `.vscode/settings.json`

```json
// .vscode/settings.json
{
  "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

## Recommendation

Add the following config files to the root of your project:

- [.prettierignore](https://prettier.io/docs/en/ignore.html)
- [.editorconfig](https://editorconfig.org/)

```sh
# .editorconfig: http://EditorConfig.org
root = true

[*]
charset=utf-8
end_of_line=lf
insert_final_newline=false
indent_style=space
indent_size=2

[{*.ng,*.sht,*.html,*.shtm,*.shtml,*.htm}]
indent_style=space
indent_size=2

[{*.jhm,*.xslt,*.xul,*.rng,*.xsl,*.xsd,*.ant,*.tld,*.fxml,*.jrxml,*.xml,*.jnlp,*.wsdl}]
indent_style=space
indent_size=2

[{.babelrc,.stylelintrc,.eslintrc,.prettierrc,*.json,*.jsb3,*.jsb2,*.bowerrc}]
indent_style=space
indent_size=2

[*.svg]
indent_style=space
indent_size=2

[*.js.map]
indent_style=space
indent_size=2

[*.less]
indent_style=space
indent_size=2

[*.vue]
indent_style=space
indent_size=2

[{.analysis_options,*.yml,*.yaml}]
indent_style=space
indent_size=2
```

## LICENSE

[MIT](LICENSE)
