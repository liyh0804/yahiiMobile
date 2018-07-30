import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomePage from './pages/home';
import VideoPage from './pages/videos';
import PlanPage from './pages/plans';
import GrownPage from './pages/grown';
import ImagesPage from './pages/images';

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
