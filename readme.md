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

6、dva-no-router + react-navigation 框架管理state等相关
  npm install dva-no-router dva-loading react-navigation

7、react-native-camera
  (1)安装配置
    npm install --save react-native-camera
    react-native link react-native-camera
  (2) 配置访问权限
    ios： Info.plist 配置照相机、相册、麦克风权限

  注意： (1)Podfile下配置React、yoga，执行 pod update --verbose --no-repo-update
        (2)找不到<React//RCTBridgeModule.h>, 
        Xcode --> build settings--> Header Search Path下配置一下即可
      
      (3) npm start报 Error: jest-haste-map: @providesModule naming       collision: Duplicate module name: react-native
          删除Pods文件夹，重新pod update 一下

8、react-native-vector-icons
  (1) npm i --save react-native-vector-icons
      react-native link react-native-vector-icons
  (2) www.iconfont.cn 下载iconfont.ttf
  (3) 命令行安装fonttools【需要python环境】（pip install fonttools）
  (4) reat-native-iconfont-mapper 克隆到本地，
      自己修改confront-mapper.py使其生成json的文件，
      执行python iconfont-mapper.py iconfont.ttf iconfont.json（iconfont.json就是图标和字符串的映射）
（5）自行仿照react-native-vector-icons变细iconfont的代码如下：
    import { createIconSet } from 'react-native-vector-icons';
    import glyphMap from '../../files/iconfont.json';
    const iconSet = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');
    export default iconSet;	
（6）ios Xcode将iconfont.ttf 加入 。 android 将iconfont.ttf 拷贝到      android/app/src/main/assets/fonts下，
  重新安装对应的包，ok，就可以使用了
