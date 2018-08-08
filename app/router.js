import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Iconfont from './components/iconfont';
import HomePage from './pages/home';
import VideoPage from './pages/videos';
import PlanPage from './pages/plans';
import GrownPage from './pages/grown';
import ImagesPage from './pages/images';
import VideoPlayer from './pages/video-player';

const BottomTabNav = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    path: '/home',
  },
  Videos: {
    screen: VideoPage,
    path: '/videos',
  },
  Plans: {
    screen: PlanPage,
    path: '/plans',
  },
  Grown: {
    screen: GrownPage,
    path: '/grown',
  },
  Images: {
    screen: ImagesPage,
    path: '/images',
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: true,
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
      } else if (routeName === 'Videos') {
        iconName = 'video';
      } else if (routeName === 'Grown') {
        iconName = 'grown';
      } else if (routeName === 'Plans') {
        iconName = 'plan';
      } else if (routeName === 'Images') {
        iconName = 'user';
      }
      // 在此处返回任何组件
      // 通常使用react-native-vector-icons中的图标
      return <Iconfont name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#fff',
    },
  },
});

const RootStack = createStackNavigator({
  HomeTab: {
    screen: BottomTabNav,
    navigationOptions: {
      header: null,
    },
  },
  VideoPlayer: {
    screen: VideoPlayer,
    path: '/video-player',
  },
}, {
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.routeName,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }),
});

export default RootStack;
