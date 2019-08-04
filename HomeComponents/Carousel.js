import React, { Component } from 'react';
import ImageCarousel from 'react-native-image-carousel';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
 
const urls = [
  'https://d919ce141ef35c47fc40-b9166a60eccf0f83d2d9c63fa65b9129.ssl.cf5.rackcdn.com/images/67003.max-620x600.jpg',
  'https://d919ce141ef35c47fc40-b9166a60eccf0f83d2d9c63fa65b9129.ssl.cf5.rackcdn.com/images/51681.max-620x600.jpg',
  'https://d919ce141ef35c47fc40-b9166a60eccf0f83d2d9c63fa65b9129.ssl.cf5.rackcdn.com/images/66812.max-620x600.jpg',
  'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1438960604-925d1997518b66f8508c749f36810793.jpeg',
];

class Carousel extends Component {
  _imageCarousel;
 
  componentWillMount() {
    (this) => _renderHeader = this._renderHeader.bind(this);
  }
 
  _renderHeader() {
    return (
      <TouchableWithoutFeedback onPress={this._imageCarousel.close}>
        <View>
          <Text style={styles.closeText}>Exit</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
 
  _renderFooter() {
    return (
      <Text style={styles.footerText}>Footer!</Text>
    );
  }
 
  _renderContent(idx) {
    return (
      <Image
        style={styles.container}
        source={{ uri: urls[idx] }}
        resizeMode={'contain'}
      />
    );
  }
 
  render() {
    return (
      <View style={styles.container}>
        <ImageCarousel
          ref={(imageCarousel) => {
            this._imageCarousel = imageCarousel;
          }}
          renderContent={this._renderContent}
          renderHeader={this._renderHeader}
          renderFooter={this._renderFooter}
        >
          {urls.map((url)  => (
            <Image
              key={url}
              style={styles.image}
              source={{ uri: url, height: 100 }}
              resizeMode={'contain'}
            />
          ))}
        </ImageCarousel>
      </View>
    );
  }
}

export default Carousel;