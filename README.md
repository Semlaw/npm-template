# npm-template
a template for npm package development。

[![Build Status](https://travis-ci.org/Semlaw/npm-template.svg?branch=master)](https://travis-ci.org/Semlaw/npm-template)

### IDE

- 推荐使用`Visual Studio Code`作为IDE，使用ESlint进行JavaScript 语法规则和代码风格的检查。
- [VS Code ESLint extension配置](https://github.com/microsoft/vscode-eslint#settings-migration)

### Usage

```shell
npm start         # 同 npm run watch

npm run dev       # 同 npm run watch

npm run watch     # 以 webpack mode = development 构建 umd 文件，并对源文件进行修改监听

npm build         # 以 webpack mode = production 构建 umd 文件，输出至 ./dist

npm test          # 使用 jest 运行 ./tests 内的用例，在 ./coverage 生成测试报告

```

### Desc

 - `src`                  源代码
 - `tests`               `jest`测试代码
 - `.babelrc`            `babel`配置
 - `.eslintrc.js`        `eslintrc`配置
 - `gulpfile.js`         `gulp`构建脚本
 - `webpack.config.js`   `webpack`配置
 - `travis.yml`          `travis`[配置](https://travis-ci.org)`
### 

