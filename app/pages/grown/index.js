import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class Grown extends Component {
  static navigationOptions = () => {
    return {
      title: '成长',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>一点一滴终会达到</Text>
      </View>
    );
  }
}

export default Grown;
