import React, { Component } from 'react';
import {
  View, Dimensions, Image, Text, Slider,
  TouchableWithoutFeedback, TouchableOpacity, Button,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import Iconfont from '../../components/iconfont';
import styles from './style';

const screenWidth = Dimensions.get('window').width;

class VideoPlayer extends Component {
  static navigationOptions = {
    headerTitle: 'Video Play',
  };

  constructor(props) {
    super(props);
    this.state = {
      videoUrl: './broadchurch.mp4',
      // videoCover: "",
      videoWidth: screenWidth,
      videoHeight: screenWidth * 9 / 16,
      showVideoCover: true, // 是否显示视频封面
      showVideoControl: false, // 是否显示视频控制组件
      isPlaying: false, // 视频是否正在播放
      currentTime: 0, // 视频当前播放的时间
      duration: 0, // 视频总时长
      isFullScreen: false, // 当前是否全屏显示
      playFromBeginning: false, // 是否从头开始播放
    };
  }

  _onLayout = (event) => {
    // 获取根View的宽高
    const { width, height } = event.nativeEvent.layout;
    // 一半设备横屏下的宽度大于高度，用来判断横竖屏
    const isLandscape = width > height;
    if (isLandscape) {
      this.setState({
        videoWidth: width,
        videoHeight: height,
        isFullScreen: true,
      });
    } else {
      this.setState({
        videoWidth: width,
        videoHeight: width * 9 / 16,
        isFullScreen: false,
      });
    }
    Orientation.unlockAllOrientations();
  }

  _onLoadStart = () => {
    console.log('video begin loading ...');
  }

  _onLoaded = (data) => {
    console.log('video finish loaded');
    this.setState({
      duration: data.duration,
    });
  }

  _onProgressChanged = (data) => {
    console.log('video progress updated');
    if (this.state.isPlaying) {
      this.setState({
        currentTime: data.currentTime,
      });
    }
  }

  _onPlayEnd = () => {
    console.log("video play end");
    this.setState({
      currentTime: 0,
      isPlaying: false,
      playFromBeginning: true,
    });
  }

  _onPlayError = () => {
    console.log('video play error');
  }

  _onBuffering = () => {
    console.log('video is bufferring...');
  }

  hideControl = () => { }

  onPressPlayButton = () => {
    const { isPlaying, playFromBeginning } = this.state;
    this.setState({
      isPlaying: !isPlaying,
      showVideoCover: false,
    });
    if (playFromBeginning) {
      this.videoPlayer.seek(0);
      this.setState({
        playFromBeginning: false,
      });
    }
  }

  operateVideo = () => {
    const { isPlaying } = this.state;
    this.setState({
      isPlaying: !isPlaying,
    });

    if (!isPlaying) {
      this.setState({
        showVideoCover: false,
      });
    }
  }

  onSliderValueChanged = (currentTime) => {}

  render() {
    const { videoWidth, videoHeight, videoUrl, isPlaying, videoCover,
      currentTime, duration, isFullScreen } = this.state;

    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <View style={{ width: videoWidth, height: videoHeight, backgroundColor: '#000000' }}>
          <Video
            ref={(ref) => { this.videoPlayer = ref; }}
            source={require('./broadchurch.mp4')}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={!isPlaying}
            resizeMode="contain"
            playWhenInactive={false}
            playInBackground={false}
            ignoreSilentSwitch="ignore"
            progressUpdateInterval={250.0}
            onLoadStart={this._onLoadStart}
            onLoad={this._onLoaded}
            onProgress={this._onProgressChanged}
            onEnd={this._onPlayEnd}
            onError={this._onPlayError}
            onBuffer={this._onBuffering}
            style={{ width: videoWidth, height: videoHeight }}
          />
          {/* {
            this.state.showVideoCover ?
              <View style={[styles.videoCoverStyle, { width: videoWidth, height: videoHeight }]}>
                <Iconfont name="bofang" size={35} color="#ffffff" />
              </View> : null
              // <Image
              //   style={[styles.videoCoverStyle, { width: videoWidth, height: videoHeight }]}
              //   resizeMode="cover"
              //   source={{ uri: videoCover }}
              // /> : null
          } */}
          <TouchableWithoutFeedback onPress={() => this.hideControl()}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: videoWidth,
                height: videoHeight,
                backgroundColor: isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {
                isPlaying ?
                  null :
                  <TouchableWithoutFeedback onPress={() => { this.onPressPlayButton(); }}>
                    <Iconfont name="bofang" size={35} color="#ffffff" />
                  </TouchableWithoutFeedback>
              }
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.toolControl}>
          <TouchableWithoutFeedback onPress={() => this.operateVideo()}>
            {isPlaying ? <Iconfont name="videopaused" size={24} /> : <Iconfont name="videoplay" size={24} />}
          </TouchableWithoutFeedback>
          <View style={styles.timeStyle}>
            <Text>{formatTime(currentTime)}</Text>
          </View>
          <Slider
            style={styles.sliderStyle}
            maximumTrackTintColor="#999999"
            minimumTrackTintColor="#00c06d"
            // thumbImage={require('../../assets/image/icon_control_slider.png')}
            value={currentTime}
            minimumValue={0}
            maximumValue={this.state.duration}
            onValueChange={() => { this.onSliderValueChanged(currentTime); }}
          />
          <View style={styles.timeStyle}>
            <Text>{formatTime(duration)}</Text>
          </View>
          <TouchableWithoutFeedback>
            {isFullScreen ? <Iconfont name="tuichuquanping" size={24} /> : <Iconfont name="quanping" size={24} />}
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default VideoPlayer;

function formatTime(second) {
  let h = 0;
  let i = 0;
  let s = parseInt(second, 10);
  if (s > 3600) {
    h = parseInt(s / 3600, 10);
    s = parseInt(s % 3600, 10);
  }
  if (s > 60) {
    i = parseInt(s / 60, 10);
    s = parseInt(s % 60, 10);
  }
  const zero = (v) => {
    return v < 10 ? ('0' + v) : v;
  };

  return [zero(i), zero(s)].join(':');
}
