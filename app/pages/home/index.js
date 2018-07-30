import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class Home extends Component {
  static navigationOptions = () => {
    return {
      title: '主页',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Page</Text>
      </View>
    );
  }
}

export default Home;
