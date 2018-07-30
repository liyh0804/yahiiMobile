import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class Video extends Component {
  static navigationOptions = () => {
    return {
      title: '视频',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>视频列表</Text>
      </View>
    );
  }
}

export default Video;
