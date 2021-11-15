/*
 * @Author: ZY
 * @Date: 2021-10-28 14:19:21
 * @LastEditors: ZY
 * @LastEditTime: 2021-11-09 16:35:23
 * @FilePath: /main/.eslintrc.js
 * @Description: 文件描述
 */
module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'plugin:prettier/recommended'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    'react/no-unstable-nested-components': 'off',
    'no-undef': 'off',
  },
};
