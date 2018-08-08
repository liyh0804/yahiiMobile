import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import styles from './style';
import Videoplayer from '../video-player';

class Videos extends Component {
  static navigationOptions = () => {
    return {
      title: '视频',
    };
  };

  render() {
    const uri = 'http://video.shop.hisense.com/9d130d74cda64a76a65599718bd68839/4567c418f0fc49b98d2e3caf8a2b48ae-8c748b8f00bfaf2f6df4fd532135e7cb-fd.mp4';
    return (
      <Videoplayer uri={uri} />
    );
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.text}>视频列表</Text>
    //     <Video
    //       source={{ uri: 'http://video.shop.hisense.com/9d130d74cda64a76a65599718bd68839/4567c418f0fc49b98d2e3caf8a2b48ae-8c748b8f00bfaf2f6df4fd532135e7cb-fd.mp4' }}
    //       ref={(ref) => {
    //         this.player = ref;
    //       }}
    //       // onBuffer={this.onBuffer}
    //       // onEnd={this.onEnd}
    //       // onError={this.videoError}
    //       style={styles.backgroundVideo}
    //     />
    //     <Text style={styles.text}>视频列表</Text>
    //   </View>
    // );
  }
}

export default Videos;
