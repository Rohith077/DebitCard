import React from 'react';
import { View , Image as ImageCmp } from 'react-native';

export const Image = (props) => {
  const {src, width, height} = props;

  return (
      <View>
        <ImageCmp
          style={{width:width, height:height}}
          source={src}
        />
      </View>
  );
};




