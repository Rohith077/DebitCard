import React from 'react';
import { View ,Text ,StyleSheet} from 'react-native';
import { colors } from '../../common/colors/index';
import { fonts, fontWeight } from '../../common/fonts';
import { spacing } from '../../common/spacing';
import { Image } from '../image';

export const Card = (props) => {
  const { hideLabel = 'Hide card number' ,
          bankName = 'aspire',
          cardHolder = 'Mark Henry',
          cardNumber = ['5647', '3411', '2413', '2020'],
          expireDate = 'Thru: 12/20',
          cvvNumber = '456',
        } = props;

 const cardNumbers = cardNumber.map((name) => <Text style={styles.cardNumberText}>{name}</Text>);

  return (
    <View style={styles.cardOuterWrapper}>
      <View style={styles.hideLabelWrapper}>
        <View style={styles.hideLabelContainer}>
          <Image src={require('../../assets/icons/group.png')}     height={18} width={18} />
          <Text style={styles.hideLabelText}>{hideLabel}</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardWrapper}>
            <View style={styles.bankNameWrapper}>
              <Image src={require('../../assets/images/logo.jpeg')} height={24} width={24} />
              <Text style={styles.aspireLabel}>{bankName}</Text>
            </View>
            <Text style={styles.cardHolderName}>{cardHolder}</Text>
            <View style={styles.cardNumberContainer}>
              {cardNumbers}
            </View>
            <View style={styles.dateCvvContainer}>
              <Text style={styles.dateText}>{expireDate}</Text>
              <Text style={styles.cvvText}>CVV: {cvvNumber}</Text>
            </View>
            <Text style={styles.cardTypeText}>VISA</Text>
          </View>
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  cardOuterWrapper:{
    borderRadius:spacing[14],
  },
  hideLabelWrapper :{
    borderRadius:spacing[14],
  },
  hideLabelContainer:{
    backgroundColor:colors.white,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'flex-end',
    width:'45%',
    paddingVertical:spacing[6],
    paddingHorizontal:spacing[10],
    borderTopLeftRadius:spacing[6],
    borderTopRightRadius:spacing[6],
    overflow:'hidden',
  },
  hideLabelText:{
    textAlign:'center',
    color: colors.green,
    fontSize: fonts.medium,
    fontWeight:fontWeight.bold,
    marginHorizontal:spacing[6],
    letterSpacing:0.7,
  },
  cardContainer:{
    backgroundColor:colors.white,
    borderTopLeftRadius:spacing[14],
    borderBottomRightRadius:spacing[14],
    borderBottomLeftRadius:spacing[14],
  },
  cardWrapper: {
    height:220,
    backgroundColor: colors.green,
    borderRadius:spacing[14],
    padding:spacing[14],
  },
  bankNameWrapper:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  aspireLabel:{
    color:colors.white,
    fontSize:fonts.xlarge ,
    marginLeft: spacing[2],
    fontWeight:fontWeight.semiBold,
    marginBottom:spacing[2] - 1,
    letterSpacing:1,
  },
  cardHolderName:{
    textAlign:'left' ,
    color:colors.white,
    fontSize:fonts.xxlarge ,
    marginTop: spacing[32],
    fontWeight:fontWeight.bold,
    letterSpacing: spacing[2] - 1,
  },
  cardNumberContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:spacing[32] + spacing[16],
    marginTop:spacing[24],
  },
  cardNumberText:{
    color:colors.white,
    letterSpacing: spacing[4] + 1,
    fontWeight:fontWeight.semiBold,
  },
  dateCvvContainer:{
    marginTop:spacing[12],
    flexDirection:'row',
  },
  dateText:{
    color:colors.white,
    letterSpacing: spacing[2] - 1,
    fontWeight:fontWeight.regular,

  },
  cvvText:{
    marginLeft:spacing[30],
    color:colors.white,
    letterSpacing:spacing[2] - 1,
    fontSize:fonts.large,
    fontWeight:fontWeight.regular,
  },
  cardTypeText:{
    textAlign:'right' ,
    fontSize:fonts.xxxlarge ,
    color:colors.white,
    fontWeight:fontWeight.bold,
    fontStyle:'italic',
  },
});


