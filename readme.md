1、初始化项目
    npm install -g react-native-cli
    react-native init yahiiMobile

2、格式化文本编辑器配置 .editorconfig

3、代码风格格式化（eslint）
  (1)安装依赖包
  npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
  (2)生成eslint规则配置文件(.eslint.js)
    ./node_modules/.bin/eslint --init
  (3)配置规则参考eslint配置规则
    http://eslint.cn/docs/rules/
