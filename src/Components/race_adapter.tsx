import { NavigationScreenProp } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Race } from '../Types/race_types';

type RaceProps = {
  race: Race;
  navigation: NavigationScreenProp<any,any>;
}

export const RaceAdapter: React.FC<RaceProps> = ({ race, navigation }) =>
  <View style={styles.row}>
      <Image
        style={ styles.image }
        source={{ uri: 'https://image.flaticon.com/icons/png/512/147/147216.png' }} 
        />
      <Text 
        onPress = { 
          () => navigation.navigate(
            'Rank',
            { race: race }
          ) 
        }
        style={ styles.text }
      > {race.raceName} ({race.Circuit ? race.Circuit.circuitName : "" } ) - {race.date} </Text>
  </View> 

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  image: {
    width: 120, 
    height: 120,
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
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})