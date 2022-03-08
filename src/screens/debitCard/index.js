import React,{useState} from 'react';
import {StyleSheet, View ,Switch , ScrollView} from 'react-native';
import {Card} from '../../components/card/index';
import {List} from '../../components/list/index';
// import { Button } from '../../components/button';
import { Typography } from '../../components/text';
import { fontWeight } from '../../common/fonts';
import { Image } from '../../components/image';
import { spacing } from '../../common/spacing';
import { colors } from '../../common/colors';

// const onPress = () => {
//   alert('clicked');
// };

const ListWrapper = (props) => {
  const { children } = props;
  return (
    <View style={styles.listWrapper}>
      {children}
    </View>
);};

export const DebitCardScreen = (props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
     <View style={styles.debitCardContainer}>
       <View style={styles.debitCardHeaderWrapper}>
        <View style={styles.logoWrapper}>
            <Typography label="Debit Card" color={colors.white} size={22} fontWeight={fontWeight.bold} />
            <Image src={require('../../assets/images/companyLogo.jpeg')}height={32} width={32} />
        </View>

          <View style={styles.textWrapper}>
            <Typography label="Available balance" color={colors.white} size={14} />
            <View style={styles.currencyWrapper}>
              <Image src={require('../../assets/images/currency.jpg')}     height={28} width={40} />
              <Typography label="3,000" color={colors.white} size={22} fontWeight={fontWeight.bold} style={styles.amountLabel} />
            </View>
          </View>
       </View>

       <ScrollView>
        <View style={{flex:1}}>
          <View style={{margin:20 , zIndex:1}}>
            <Card
              hideLabel = "Hide card number"
              bankName = "aspire"
              cardHolder = "Mark Henry"
              cardNumber ={['5647', '3411', '2413', '2020']}
              expireDate = "Thru: 12/20"
              cvvNumber = "456"
            />
          </View>

          <View style={{flex:1,backgroundColor:'white',     marginTop:-150 ,borderTopLeftRadius:20,borderTopRightRadius:20}}>


        <View style={{paddingHorizontal:20}}>
          <View style={{marginTop:150}}>
          {/* <Typography label="Debit card spending limit" color={colors.black} size={14} /> */}
          </View>
          <ListWrapper>
            <List
              title="Top-up account"
              description="Deposit money to your account to use with card"
              src={require('../../assets/icons/insight.png')}
              width={32} height={32}
            />
          </ListWrapper>

          <ListWrapper>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',
          }}>
              <List
                title="Weekly spending limit"
                description="Your weekly spending limit is S$ 5,000"
                src={require('../../assets/icons/Transfer-2.png')}
                width={32} height={32}
              />
              <Switch
                trackColor={{ false: '#767577', true: colors.green }}
                thumbColor={isEnabled ? colors.white : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

          </ListWrapper>

          <ListWrapper>
          <List
              title="Freeze card"
              description="Your debit card is currently active"
              src={require('../../assets/icons/Transfer-3.png')}
              width={32} height={32}
            />
          </ListWrapper>

          <ListWrapper>
          <List
              title="Get a new card"
              description="This deactivates your current debit card"
              src={require('../../assets/icons/Transfer-1.png')}
              width={32} height={32}
            />
          </ListWrapper>

          <ListWrapper>
          <List
            title="Deactivated cards"
            description="Deactivated cards"
            src={require('../../assets/icons/Transfer.png')}
            width={32} height={32}
          />
          </ListWrapper>
        </View>

      </View>
        </View>
        </ScrollView>
     </View>
  );
};

const styles = StyleSheet.create({
  debitCardContainer:{
    flex:1,
    backgroundColor:colors.purpleDarkest,
  },
  debitCardHeaderWrapper:{
    paddingVertical:spacing[18],
    paddingHorizontal:spacing[22],
  },
  logoWrapper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  textWrapper:{
    marginTop:spacing[24],
  },
  currencyWrapper:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:spacing[8],
  },
  amountLabel:{
    marginLeft:spacing[8],
  },
  listWrapper:{
    marginBottom:spacing[28],
  },
});

