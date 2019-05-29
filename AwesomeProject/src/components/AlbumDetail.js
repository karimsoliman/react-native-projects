import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './Button';


const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image, url } = album;
  const { textStyle,
          humbnailContainerStyle,
          thumbnailStyle,
          textContainerStyle,
          imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={humbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainerStyle}>
          <Text style={textStyle}> {title} </Text>
          <Text> {artist} </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <CustomButton whenPressed={() => Linking.openURL(url)} buttonText={'Buy'} />
      </CardSection>

    </Card>
  );
};

const styles = {
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  humbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: 300
  }
};
export default AlbumDetail;
