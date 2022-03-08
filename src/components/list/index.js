import React from 'react';
import { View ,Text ,StyleSheet } from 'react-native';
import { colors } from '../../common/colors/index';
import { fonts , fontWeight} from '../../common/fonts/index';
import { spacing } from '../../common/spacing';
import { Image } from '../image/index';

export const List = (props) => {
  const {title, description} = props;
  return (
      <View style={styles.listContainer}>
          <Image {...props}/>
          <View style={styles.listContentWrapper}>
            <Text style={styles.listTitle}>{title}</Text>
            <Text style={styles.listDescription}>{description}</Text>
          </View>
      </View>
  );
};


const styles = StyleSheet.create({
  listContainer: {
    flexDirection:'row',
    alignItems:'center',
  },
  listContentWrapper:{
    flexDirection:'column' ,
    marginLeft:spacing[10],
  },
  listTitle:{
    color:colors.purpleDark,
    fontSize:fonts.large,
    fontWeight:fontWeight.bold,
    fontFamily:'sans-serif',
    opacity:0.8,
  },
  listDescription:{
    color:colors.black,
    fontSize:fonts.medium,
    fontFamily:'sans-serif',
    marginTop:spacing[2],
    opacity:0.4,
  },
});


