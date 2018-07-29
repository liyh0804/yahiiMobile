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

4、ios项目改为Cocoapods管理
  （1）安装Cocoapods，（ruby环境）
      $ sudo gem install cocoapods
  （2）pod 初始化
      $cd ios && pod init ## 生成Podfile
      $ pod install ## 生成Podfile.lock
      $ pod update  ## 更新pod库的版本

      以后*.xcworkspace 代替 *.xcodeproj管理ios, 以后双击yahiiMobile.xcworkspace打开Xcode
    注意⚠️：没有开发者账号，自行百度，将AppID注册成临时开发者账号

5、Xcode替换ios AppIcon和
  准备一个1024*1024的图片，下载一个app icon自动生成对应的icon


