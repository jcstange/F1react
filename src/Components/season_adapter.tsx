import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import type { Season } from '../Types/season'

type SeasonProps = {
   season: Season;
   navigation: NavigationScreenProp<any,any>;
}

export const SeasonAdapter: React.FC<SeasonProps> = ({ season, navigation }) => 
  <View style={styles.row}>
      <Image
        style={ styles.image }
        source={{ uri: 'https://www.shareicon.net/data/512x512/2016/05/26/771264_cup_512x512.png'}}                 
      />
      <Text 
        onPress = { 
          () => navigation.navigate(
            'Races',
            { season: season.season }
          ) 
        }
        style={ styles.text }
      > {season.season}</Text>
  </View> 

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  image: {
    width: 90, 
    height: 90,
    alignSelf: 'center',
  },
  row:{
    flexDirection: 'row',
    height: 120,
    width: deviceWidth,
    justifyContent: 'flex-start',
    alignContent: 'center', 
    backgroundColor: '#333333',
    borderColor: '#000000',
    padding: 20,
    borderBottomWidth: 1,
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    backgroundColor: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})