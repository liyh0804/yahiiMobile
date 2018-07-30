import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
// import Camera from 'react-native-camera';
import styles from './style';

class Images extends Component {
  static navigationOptions = () => {
    return {
      title: '点滴',
    };
  };

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>点点滴滴</Text>
        {/* <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture}>[拍照]</Text>
        </Camera> */}
      </View>
    );
  }
}

export default Images;
