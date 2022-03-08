import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet  } from 'react-native';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';
import { spacing } from '../../common/spacing';

const width = Dimensions.get('window').width;

export const Button = (props) => {
  const { text , onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.btnContainer}>
      <Text style={styles.btnTextStyle}>{text}</Text>
    </View>
  </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: spacing[14],
    width: width / 1.3,
    borderRadius: spacing[30],
    backgroundColor:colors.green,
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: fonts.xlarge,
    textAlign: 'center',
  },
});


