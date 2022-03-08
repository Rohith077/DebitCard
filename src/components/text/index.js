import React from 'react';
import { Text , StyleSheet} from 'react-native';
import { spacing } from '../../common/spacing';

export const Typography = (props) => {
  const { label ,size ,color ,fontWeight , fontFamily , style} = props;
  return (
      <Text style={[styles.textStyle,{fontSize:size,color:color,fontWeight:fontWeight ,fontFamily:fontFamily },style]}>{label}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    fontFamily:'sans-serif',
    letterSpacing:spacing[1],
  },
});


