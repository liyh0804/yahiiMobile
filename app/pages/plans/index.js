import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class Plans extends Component {
  static navigationOptions = () => {
    return {
      title: '计划',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>良好规划</Text>
      </View>
    );
  }
}

export default Plans;
