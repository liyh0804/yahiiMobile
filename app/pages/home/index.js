import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
        <LinearGradient
          colors={['#FFD801', '#FF8040', '#F75D59']}
          style={styles.linearGradient}
        >
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('VideoPlayer'); }}>
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.text}>Home Page</Text>
      </View>
    );
  }
}

export default Home;
